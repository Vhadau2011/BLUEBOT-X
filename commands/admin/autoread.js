/**
 * Autoread Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'autoread',
  aliases: ['autoreadmode'],
  category: 'admin',
  description: 'Toggle autoread',
  usage: '.autoread [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply(`✅ *Autoread:* ${args[0] || "on"}`);
    } catch (error) {
      console.error(`Error in autoread command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
