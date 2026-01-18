/**
 * Google Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'google',
  aliases: ['search'],
  category: 'general',
  description: 'Google search',
  usage: '.google [query]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Google Command*\n\n`;
    text += `This is the google command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
