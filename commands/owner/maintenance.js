/**
 * Maintenance Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'maintenance',
  aliases: ['maint'],
  category: 'owner',
  description: 'Toggle maintenance',
  usage: '.maintenance [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply(`✅ *Maintenance:* ${args[0] || "on"}`);
    } catch (error) {
      console.error(`Error in maintenance command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
