/**
 * Unban Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unban',
  aliases: ['unbanuser'],
  category: 'admin',
  description: 'Unban user',
  usage: '.unban [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isAdmin && !isOwner) return reply("❌ Admins only!"); const u = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0] || args[0]?.replace(/\\D/g, "") + "@s.whatsapp.net"; if (!u) return reply("❌ Mention someone!"); await reply(`✅ *Unbanned:* @${u.split("@")[0]}`, { mentions: [u] });
    } catch (error) {
      console.error(`Error in unban command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
