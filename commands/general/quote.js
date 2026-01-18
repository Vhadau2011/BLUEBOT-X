/**
 * Quote Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'quote',
  aliases: ['randomquote'],
  category: 'general',
  description: 'Random quote',
  usage: '.quote',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Quote Command*\n\n`;
    text += `This is the quote command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
