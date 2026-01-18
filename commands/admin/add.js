/**
 * Add Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'add',
  aliases: ['addmember'],
  category: 'admin',
  description: 'Add member',
  usage: '.add [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); if (!args[0]) return reply("❌ Provide number!"); await sock.groupParticipantsUpdate(from, [args[0].replace(/\\D/g, "") + "@s.whatsapp.net"], "add"); await reply("✅ Added!");
    } catch (error) {
      console.error(`Error in add command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
