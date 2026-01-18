/**
 * Crypto Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
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
    try {
if (!args[0]) return reply("❌ Provide coin (e.g. BTC)!"); try { const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${args[0].toUpperCase()}USDT`); await reply(`💰 *${args[0].toUpperCase()}:* $${parseFloat(res.data.price).toLocaleString()}`); } catch { reply("❌ Not found!"); }
    } catch (error) {
      console.error(`Error in crypto command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
