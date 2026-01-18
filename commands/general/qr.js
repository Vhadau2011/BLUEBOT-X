/**
 * Qr Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
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
    try {
if (!args[0]) return reply("❌ Provide text!"); await sock.sendMessage(from, { image: { url: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(args.join(" "))}` }, caption: "✅ QR Generated" });
    } catch (error) {
      console.error(`Error in qr command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
