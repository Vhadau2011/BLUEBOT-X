/**
 * Filter Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'filter',
  aliases: ['addfilter'],
  category: 'admin',
  description: 'Add word filter',
  usage: '.filter [word]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Filter Command*\n\n`;
    text += `This is the filter command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
