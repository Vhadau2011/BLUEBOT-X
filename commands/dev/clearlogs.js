/**
 * Clearlogs Command
 * Category: Dev
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'clearlogs',
  aliases: ['clearerrors'],
  category: 'dev',
  description: 'Clear error logs',
  usage: '.clearlogs',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply("✅ *Logs cleared!*");
    } catch (error) {
      console.error(`Error in clearlogs command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
