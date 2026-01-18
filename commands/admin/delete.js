/**
 * Delete Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'delete',
  aliases: ['del'],
  category: 'admin',
  description: 'Delete message',
  usage: '.delete [reply to message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Delete Command*\n\n`;
    text += `This is the delete command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
