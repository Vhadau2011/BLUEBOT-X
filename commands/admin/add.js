/**
 * Add Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'add',
  aliases: ['addmember'],
  category: 'admin',
  description: 'Add member',
  usage: '.add [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Add Command*\n\n`;
    text += `This is the add command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
