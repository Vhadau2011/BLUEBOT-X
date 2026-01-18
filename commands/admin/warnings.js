/**
 * Warnings Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'warnings',
  aliases: ['warnlist'],
  category: 'admin',
  description: 'List warnings',
  usage: '.warnings [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const u = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0] || sender; await reply(`⚠️ *Warnings for @${u.split("@")[0]}:* 0`, { mentions: [u] });
    } catch (error) {
      console.error(`Error in warnings command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
