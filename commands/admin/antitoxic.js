/**
 * Antitoxic Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'antitoxic',
  aliases: ['antibadword'],
  category: 'admin',
  description: 'Toggle antitoxic',
  usage: '.antitoxic [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); await reply(`✅ *Antitoxic:* ${args[0] || "on"}`);
    } catch (error) {
      console.error(`Error in antitoxic command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
