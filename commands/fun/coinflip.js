/**
 * Coinflip Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'coinflip',
  aliases: ['flip'],
  category: 'fun',
  description: 'Flip coin',
  usage: '.coinflip',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply(`🪙 *Result:* ${Math.random()<0.5?"Heads":"Tails"}`);
    } catch (error) {
      console.error(`Error in coinflip command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
