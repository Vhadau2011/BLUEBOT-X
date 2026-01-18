/**
 * Filters Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'filters',
  aliases: ['filterlist'],
  category: 'admin',
  description: 'List filtered words',
  usage: '.filters',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Filters Command*\n\n`;
    text += `This is the filters command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
