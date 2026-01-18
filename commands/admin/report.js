/**
 * Report Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'report',
  aliases: ['reportuser'],
  category: 'admin',
  description: 'Report user to admins',
  usage: '.report [@user] [reason]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Report Command*\n\n`;
    text += `This is the report command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
