/**
 * Qr Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'qr',
  aliases: ['qrcode'],
  category: 'general',
  description: 'Generate QR code',
  usage: '.qr [text]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!args[0]) return reply('❌ Please provide text for the QR code!');
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(args.join(' '))}`;
    await sock.sendMessage(from, { image: { url }, caption: `✅ QR Code for: ${args.join(' ')}` }, { quoted: msg });
  }
};
