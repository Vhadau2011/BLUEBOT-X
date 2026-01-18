/**
 * Mute Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'mute',
  aliases: ['mutegroup'],
  category: 'admin',
  description: 'Mute group',
  usage: '.mute',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); await sock.groupSettingUpdate(from, "announcement"); await reply("🔒 *Muted!*");
    } catch (error) {
      console.error(`Error in mute command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
