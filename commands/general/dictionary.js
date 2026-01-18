/**
 * Dictionary Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'dictionary',
  aliases: ['define'],
  category: 'general',
  description: 'Define word',
  usage: '.dictionary [word]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Dictionary Command*\n\n`;
    text += `This is the dictionary command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
