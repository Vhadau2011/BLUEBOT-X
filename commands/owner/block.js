/**
 * Block Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'block',
  aliases: ['blockuser'],
  category: 'owner',
  description: 'Block user',
  usage: '.block [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); const u = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0] || args[0]?.replace(/\\D/g, "") + "@s.whatsapp.net"; if (!u) return reply("❌ Mention someone!"); await sock.updateBlockStatus(u, "block"); await reply("🚫 *Blocked!*");
    } catch (error) {
      console.error(`Error in block command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
