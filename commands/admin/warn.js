/**
 * Warn Command
 * Category: Admin
 * Developer: mudau_t
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

    if (!isGroupAdmin && !isOwner) return reply('❌ Admins only!');
    const user = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0];
    if (!user) return reply('❌ Mention someone!');
    await reply(`⚠️ *User Warned:* ${user.split('@')[0]}\nWarnings: 1/3`);
  }
};
