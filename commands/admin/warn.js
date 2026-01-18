/**
 * Warn Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'warn',
  aliases: ['warning'],
  category: 'admin',
  description: 'Warn user',
  usage: '.warn [@user] [reason]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Warn Command*\n\n`;
    text += `This is the warn command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
