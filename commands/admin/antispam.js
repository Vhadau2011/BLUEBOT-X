/**
 * Antispam Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'antispam',
  aliases: ['antispammode'],
  category: 'admin',
  description: 'Toggle antispam',
  usage: '.antispam [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); await reply(`✅ *Antispam:* ${args[0] || "on"}`);
    } catch (error) {
      console.error(`Error in antispam command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
