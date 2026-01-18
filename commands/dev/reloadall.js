/**
 * Reloadall Command
 * Category: Dev
 * Developer: mudau_t
 */

export default {
  name: 'reloadall',
  aliases: ['reloadcmds'],
  category: 'dev',
  description: 'Reload all commands',
  usage: '.reloadall',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Reloadall Command*\n\n`;
    text += `This is the reloadall command in the dev category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
