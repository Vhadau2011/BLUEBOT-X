/**
 * Rank Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'rank',
  aliases: ['level'],
  category: 'general',
  description: 'Your rank in bot',
  usage: '.rank',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Rank Command*\n\n`;
    text += `This is the rank command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
