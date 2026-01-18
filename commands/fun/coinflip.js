/**
 * Coinflip Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'coinflip',
  aliases: ['flip'],
  category: 'fun',
  description: 'Flip coin',
  usage: '.coinflip',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    await reply(`🪙 Coin flip result: *${result}*`);
  }
};
