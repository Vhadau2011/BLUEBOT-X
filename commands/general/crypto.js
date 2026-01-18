/**
 * Crypto Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'crypto',
  aliases: ['cryptocurrency'],
  category: 'general',
  description: 'Crypto prices',
  usage: '.crypto [symbol]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!args[0]) return reply('❌ Provide a coin symbol (e.g., BTC)!');
    try {
        const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${args[0].toUpperCase()}USDT`);
        await reply(`💰 *${args[0].toUpperCase()} Price:* $${parseFloat(res.data.price).toLocaleString()}`);
    } catch { reply('❌ Coin not found or use symbol like BTC, ETH!'); }
  }
};
