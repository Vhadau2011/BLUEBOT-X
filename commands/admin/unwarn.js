/**
 * Unwarn Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unwarn',
  aliases: ['removewarn'],
  category: 'admin',
  description: 'Remove warning',
  usage: '.unwarn [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); const u = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0]; if (!u) return reply("❌ Mention someone!"); await reply(`✅ *Warning removed:* @${u.split("@")[0]}`, { mentions: [u] });
    } catch (error) {
      console.error(`Error in unwarn command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
