/**
 * Unlock Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unlock',
  aliases: ['unlockgroup'],
  category: 'admin',
  description: 'Unlock group settings',
  usage: '.unlock',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); await sock.groupSettingUpdate(from, "unlocked"); await reply("🔓 *Settings Unlocked!*");
    } catch (error) {
      console.error(`Error in unlock command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
