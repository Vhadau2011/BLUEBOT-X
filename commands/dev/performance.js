/**
 * Performance Command
 * Category: Dev
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'performance',
  aliases: ['perf'],
  category: 'dev',
  description: 'Performance stats',
  usage: '.performance',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply(`⚡ *Performance:* ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB RAM used.`);
    } catch (error) {
      console.error(`Error in performance command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
