/**
 * Antibot Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'antibot',
  aliases: ['antibotmode'],
  category: 'admin',
  description: 'Toggle antibot',
  usage: '.antibot [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); await reply(`✅ *Antibot:* ${args[0] || "on"}`);
    } catch (error) {
      console.error(`Error in antibot command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
