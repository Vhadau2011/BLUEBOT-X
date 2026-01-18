/**
 * About Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'about',
  aliases: ['botinfo'],
  category: 'general',
  description: 'About the bot',
  usage: '.about',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *About Command*\n\n`;
    text += `This is the about command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
