/**
 * Debug Command
 * Category: Dev
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'debug',
  aliases: ['debugmode'],
  category: 'dev',
  description: 'Toggle debug mode',
  usage: '.debug [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply(`✅ *Debug mode:* ${args[0] || "on"}`);
    } catch (error) {
      console.error(`Error in debug command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
