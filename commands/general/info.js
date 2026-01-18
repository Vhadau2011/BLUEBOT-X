/**
 * Info Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'info',
  aliases: ['info'],
  category: 'general',
  description: 'Display bot information',
  usage: '.info',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    let text = `*BLUEBOT-X v2.0.0*\n\n`;
    text += `🤖 *Bot Name:* ${config.BOT_NAME}\n`;
    text += `👨‍💻 *Developer:* mudau_t\n`;
    text += `⏱️ *Uptime:* ${hours}h ${minutes}m\n`;
    text += `📦 *Commands:* ${global.commands.size}\n`;
    text += `🌐 *Platform:* Node.js\n\n`;
    text += `_Advanced WhatsApp automation solution._`;
    await reply(text);
  }
};
