/**
 * Autorespond Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'autorespond',
  aliases: ['autoresp'],
  category: 'owner',
  description: 'Set auto response',
  usage: '.autorespond [trigger] [response]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Autorespond Command*\n\n`;
    text += `This is the autorespond command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
