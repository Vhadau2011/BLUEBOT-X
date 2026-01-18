/**
 * Autoreply Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'autoreply',
  aliases: ['autoreplymode'],
  category: 'admin',
  description: 'Toggle autoreply',
  usage: '.autoreply [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply(`✅ *Autoreply:* ${args[0] || "on"}`);
    } catch (error) {
      console.error(`Error in autoreply command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
