/**
 * Clearall Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'clearall',
  aliases: ['wipedata'],
  category: 'owner',
  description: 'Clear all data',
  usage: '.clearall',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply("🧹 *All data cleared!*");
    } catch (error) {
      console.error(`Error in clearall command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
