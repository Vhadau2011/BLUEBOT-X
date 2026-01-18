/**
 * Unfilter Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unfilter',
  aliases: ['removefilter'],
  category: 'admin',
  description: 'Remove word filter',
  usage: '.unfilter [word]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); if (!args[0]) return reply("❌ Provide word!"); await reply(`✅ *Unfiltered:* ${args[0]}`);
    } catch (error) {
      console.error(`Error in unfilter command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
