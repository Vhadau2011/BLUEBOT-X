/**
 * Memory Command
 * Category: Dev
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'memory',
  aliases: ['ram'],
  category: 'dev',
  description: 'Memory usage',
  usage: '.memory',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply(`🧠 *Memory:* ${Math.round(process.memoryUsage().rss / 1024 / 1024)}MB RSS.`);
    } catch (error) {
      console.error(`Error in memory command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
