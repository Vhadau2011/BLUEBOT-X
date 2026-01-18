/**
 * Unblock Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unblock',
  aliases: ['unblockuser'],
  category: 'owner',
  description: 'Unblock user',
  usage: '.unblock [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); const u = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0] || args[0]?.replace(/\\D/g, "") + "@s.whatsapp.net"; if (!u) return reply("❌ Mention someone!"); await sock.updateBlockStatus(u, "unblock"); await reply("✅ *Unblocked!*");
    } catch (error) {
      console.error(`Error in unblock command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
