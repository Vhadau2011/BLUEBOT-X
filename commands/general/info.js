/**
 * Info Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'info',
  aliases: ['info'],
  category: 'general',
  description: 'Display bot information',
  usage: '.info',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `╔════════════════════════╗\n`;
    text += `║  ℹ️ BOT INFORMATION  ║\n`;
    text += `╚════════════════════════╝\n\n`;
    text += `🤖 *Name:* BLUEBOT-X\n`;
    text += `📌 *Version:* 2.0.0\n`;
    text += `👨‍💻 *Developer:* mudau_t\n`;
    text += `⚡ *Commands:* 205+\n`;
    text += `🌐 *Platform:* WhatsApp\n\n`;
    text += `_⚠️ Modification Not Allowed_`;
    await reply(text);
  }
};
