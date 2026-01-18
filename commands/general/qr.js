/**
 * Qr Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'qr',
  aliases: ['qrcode'],
  category: 'general',
  description: 'Generate QR code',
  usage: '.qr [text]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Qr Command*\n\n`;
    text += `This is the qr command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
