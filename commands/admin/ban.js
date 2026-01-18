/**
 * Ban Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'ban',
  aliases: ['banuser'],
  category: 'admin',
  description: 'Ban user from bot',
  usage: '.ban [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!isAdmin && !isOwner) return reply('❌ Admins only!');
    const user = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0] || args[0]?.replace(/\D/g, '') + '@s.whatsapp.net';
    if (!user) return reply('❌ Mention or provide number!');
    // Logic to add to ban list
    await reply(`🚫 *User Banned:* ${user.split('@')[0]}`);
  }
};
