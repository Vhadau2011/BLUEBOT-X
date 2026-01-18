/**
 * Unmute Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unmute',
  aliases: ['unmutegroup'],
  category: 'admin',
  description: 'Unmute group',
  usage: '.unmute',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); await sock.groupSettingUpdate(from, "not_announcement"); await reply("🔓 *Unmuted!*");
    } catch (error) {
      console.error(`Error in unmute command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
