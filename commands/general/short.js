/**
 * Short Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'short',
  aliases: ['shorturl'],
  category: 'general',
  description: 'Shorten URL',
  usage: '.short [url]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Short Command*\n\n`;
    text += `This is the short command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
