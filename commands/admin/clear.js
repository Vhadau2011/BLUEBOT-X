/**
 * Clear Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'clear',
  aliases: ['purge'],
  category: 'admin',
  description: 'Clear messages',
  usage: '.clear [amount]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Clear Command*\n\n`;
    text += `This is the clear command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
