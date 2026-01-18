/**
 * Approve Command
 * Category: Mods
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'approve',
  aliases: ['whitelist'],
  category: 'mods',
  description: 'Approve user',
  usage: '.approve [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isMod && !isOwner) return reply("❌ Mods only!"); const u = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0]; if (!u) return reply("❌ Mention someone!"); await reply(`✅ *Approved:* @${u.split("@")[0]}`, { mentions: [u] });
    } catch (error) {
      console.error(`Error in approve command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
