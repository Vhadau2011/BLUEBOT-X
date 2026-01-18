/**
 * Warn Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'warn',
  aliases: ['warning'],
  category: 'admin',
  description: 'Warn user',
  usage: '.warn [@user] [reason]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); const u = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0]; if (!u) return reply("❌ Mention someone!"); await reply(`⚠️ *Warned:* @${u.split("@")[0]} (1/3)`, { mentions: [u] });
    } catch (error) {
      console.error(`Error in warn command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
