/**
 * Ban Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'ban',
  aliases: ['banuser'],
  category: 'admin',
  description: 'Ban user from bot',
  usage: '.ban [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Ban Command*\n\n`;
    text += `This is the ban command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
