/**
 * Daily Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'daily',
  aliases: ['dailyreward'],
  category: 'general',
  description: 'Claim daily reward',
  usage: '.daily',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🎁 *Daily Reward:* You got 500 coins!");
    } catch (error) {
      console.error(`Error in daily command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
