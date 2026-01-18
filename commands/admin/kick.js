/**
 * Kick Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'kick',
  aliases: ['remove'],
  category: 'admin',
  description: 'Kick member',
  usage: '.kick [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); const u = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0]; if (!u) return reply("❌ Mention someone!"); await sock.groupParticipantsUpdate(from, [u], "remove"); await reply("✅ Kicked!");
    } catch (error) {
      console.error(`Error in kick command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
