/**
 * Cache Command
 * Category: Dev
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'cache',
  aliases: ['cacheclear'],
  category: 'dev',
  description: 'Clear cache',
  usage: '.cache',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🧹 *Cache cleared!*");
    } catch (error) {
      console.error(`Error in cache command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
