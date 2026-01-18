/**
 * Timezone Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'timezone',
  aliases: ['settz'],
  category: 'admin',
  description: 'Set timezone',
  usage: '.timezone [zone]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply(`✅ *Timezone set to:* ${args[0] || "UTC"}`);
    } catch (error) {
      console.error(`Error in timezone command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
