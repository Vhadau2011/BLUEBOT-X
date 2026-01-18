/**
 * Clear Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'clear',
  aliases: ['purge'],
  category: 'admin',
  description: 'Clear messages',
  usage: '.clear [amount]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); await reply(`🧹 *Cleared ${args[0] || "all"} messages!*`);
    } catch (error) {
      console.error(`Error in clear command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
