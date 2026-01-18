/**
 * Leave Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'leave',
  aliases: ['leavegroup'],
  category: 'owner',
  description: 'Leave group',
  usage: '.leave',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); if (!isGroup) return reply("❌ Groups only!"); await reply("👋 *Goodbye!*"); await sock.groupLeave(from);
    } catch (error) {
      console.error(`Error in leave command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
