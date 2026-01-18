/**
 * Crypto Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'crypto',
  aliases: ['cryptocurrency'],
  category: 'general',
  description: 'Crypto prices',
  usage: '.crypto [symbol]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Crypto Command*\n\n`;
    text += `This is the crypto command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
