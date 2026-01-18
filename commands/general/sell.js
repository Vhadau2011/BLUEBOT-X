/**
 * Sell Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'sell',
  aliases: ['sellit'],
  category: 'general',
  description: 'Sell items',
  usage: '.sell [item]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ What to sell?"); await reply(`✅ *Sold:* ${args[0]}`);
    } catch (error) {
      console.error(`Error in sell command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
