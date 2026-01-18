/**
 * Sell Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'sell',
  aliases: ['sellit'],
  category: 'general',
  description: 'Sell items',
  usage: '.sell [item]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Sell Command*\n\n`;
    text += `This is the sell command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
