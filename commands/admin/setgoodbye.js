/**
 * Setgoodbye Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setgoodbye',
  aliases: ['customgoodbye'],
  category: 'admin',
  description: 'Set goodbye message',
  usage: '.setgoodbye [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); if (!args[0]) return reply("❌ Provide message!"); await reply("✅ *Goodbye message set!*");
    } catch (error) {
      console.error(`Error in setgoodbye command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
