/**
 * Setwelcome Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setwelcome',
  aliases: ['customwelcome'],
  category: 'admin',
  description: 'Set welcome message',
  usage: '.setwelcome [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); if (!args[0]) return reply("❌ Provide message!"); await reply("✅ *Welcome message set!*");
    } catch (error) {
      console.error(`Error in setwelcome command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
