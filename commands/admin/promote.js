/**
 * Promote Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'promote',
  aliases: ['makeadmin'],
  category: 'admin',
  description: 'Promote to admin',
  usage: '.promote [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); const u = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0]; if (!u) return reply("❌ Mention someone!"); await sock.groupParticipantsUpdate(from, [u], "promote"); await reply("✅ Promoted!");
    } catch (error) {
      console.error(`Error in promote command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
