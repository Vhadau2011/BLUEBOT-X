/**
 * Lock Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'lock',
  aliases: ['lockgroup'],
  category: 'admin',
  description: 'Lock group settings',
  usage: '.lock',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); await sock.groupSettingUpdate(from, "locked"); await reply("🔒 *Settings Locked!*");
    } catch (error) {
      console.error(`Error in lock command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
