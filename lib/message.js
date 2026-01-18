import { downloadMediaMessage } from '@whiskeysockets/baileys';
import chalk from 'chalk';
import config from '../config.js';

/**
 * BLUEBOT-X Message Handler
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */

class MessageHandler {
  constructor(sock) {
    this.sock = sock;
  }

  /**
   * Check if user is owner
   */
  isOwner(sender) {
    return sender.replace('@s.whatsapp.net', '') === config.OWNER_NUMBER;
  }

  /**
   * Check if user is admin
   */
  isAdmin(sender) {
    const number = sender.replace('@s.whatsapp.net', '');
    return global.admins.includes(number) || this.isOwner(sender);
  }

  /**
   * Check if user is moderator
   */
  isMod(sender) {
    const number = sender.replace('@s.whatsapp.net', '');
    return global.mods.includes(number) || this.isAdmin(sender);
  }

  /**
   * Check if user is group admin
   */
  async isGroupAdmin(chatId, userId) {
    try {
      const groupMetadata = await this.sock.groupMetadata(chatId);
      const participant = groupMetadata.participants.find(p => p.id === userId);
      return participant?.admin === 'admin' || participant?.admin === 'superadmin';
    } catch (error) {
      return false;
    }
  }

  /**
   * Check if bot is group admin
   */
  async isBotGroupAdmin(chatId) {
    try {
      const groupMetadata = await this.sock.groupMetadata(chatId);
      const botNumber = this.sock.user.id.split(':')[0] + '@s.whatsapp.net';
      const participant = groupMetadata.participants.find(p => p.id === botNumber);
      return participant?.admin === 'admin' || participant?.admin === 'superadmin';
    } catch (error) {
      return false;
    }
  }

  /**
   * Handle incoming messages
   */
  async handle(messages) {
    const msg = messages[0];
    if (!msg.message) return;
    if (msg.key.fromMe) return;

    const messageType = Object.keys(msg.message)[0];
    const body = 
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text ||
      msg.message.imageMessage?.caption ||
      msg.message.videoMessage?.caption ||
      '';

    const from = msg.key.remoteJid;
    const sender = msg.key.participant || msg.key.remoteJid;
    const isGroup = from.endsWith('@g.us');
    const prefix = config.PREFIX;

    // Check if message starts with prefix
    if (!body.startsWith(prefix)) return;

    const args = body.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Find command
    const command = global.commands.get(commandName);
    if (!command) return;

    // Log command usage
    console.log(chalk.blue(`[COMMAND] ${commandName} by ${sender.split('@')[0]} in ${isGroup ? 'Group' : 'Private'}`));

    // Check permissions
    if (command.category === 'owner' && !this.isOwner(sender)) {
      return await this.sock.sendMessage(from, {
        text: '❌ This command is only for the bot owner!'
      }, { quoted: msg });
    }

    if (command.category === 'admin' && !this.isAdmin(sender)) {
      return await this.sock.sendMessage(from, {
        text: '❌ This command is only for bot admins!'
      }, { quoted: msg });
    }

    if (command.category === 'mods' && !this.isMod(sender)) {
      return await this.sock.sendMessage(from, {
        text: '❌ This command is only for bot moderators!'
      }, { quoted: msg });
    }

    if (command.category === 'group' && !isGroup) {
      return await this.sock.sendMessage(from, {
        text: '❌ This command can only be used in groups!'
      }, { quoted: msg });
    }

    if (command.category === 'dev' && !this.isOwner(sender)) {
      return await this.sock.sendMessage(from, {
        text: '❌ This command is only for developers!'
      }, { quoted: msg });
    }

    // Execute command
    try {
      await command.execute({
        sock: this.sock,
        msg,
        from,
        sender,
        body,
        args,
        isGroup,
        isOwner: this.isOwner(sender),
        isAdmin: this.isAdmin(sender),
        isMod: this.isMod(sender),
        isGroupAdmin: await this.isGroupAdmin(from, sender),
        isBotGroupAdmin: await this.isBotGroupAdmin(from),
        reply: async (text) => {
          return await this.sock.sendMessage(from, { text }, { quoted: msg });
        },
        sendMessage: async (content) => {
          return await this.sock.sendMessage(from, content, { quoted: msg });
        }
      });
    } catch (error) {
      console.error(chalk.red(`[ERROR] ${commandName}:`), error);
      await this.sock.sendMessage(from, {
        text: `❌ Error executing command: ${error.message}`
      }, { quoted: msg });
    }
  }

  /**
   * Handle group participant updates
   */
  async handleGroupUpdate(update) {
    const { id, participants, action } = update;

    if (!config.WELCOME_MSG && !config.GOODBYE_MSG) return;

    try {
      for (const participant of participants) {
        if (action === 'add' && config.WELCOME_MSG) {
          const welcomeText = `👋 Welcome to the group, @${participant.split('@')[0]}!\n\nEnjoy your stay!`;
          await this.sock.sendMessage(id, {
            text: welcomeText,
            mentions: [participant]
          });
        } else if (action === 'remove' && config.GOODBYE_MSG) {
          const goodbyeText = `👋 Goodbye @${participant.split('@')[0]}!`;
          await this.sock.sendMessage(id, {
            text: goodbyeText,
            mentions: [participant]
          });
        }
      }
    } catch (error) {
      console.error(chalk.red('[ERROR] Group update:'), error);
    }
  }
}

export default MessageHandler;
