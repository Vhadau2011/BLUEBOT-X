/**
 * Alive Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'alive',
  aliases: ['status', 'online'],
  category: 'general',
  description: 'Check if bot is alive',
  usage: '.alive',
  
  async execute({ reply }) {
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    
    let text = `╔════════════════════════╗\n`;
    text += `║  ✅ BOT IS ALIVE!  ║\n`;
    text += `╚════════════════════════╝\n\n`;
    text += `⏱️ *Uptime:* ${hours}h ${minutes}m ${seconds}s\n`;
    text += `🤖 *Bot:* BLUEBOT-X v2.0.0\n`;
    text += `👨‍💻 *Developer:* mudau_t\n`;
    text += `⚡ *Status:* Active\n\n`;
    text += `_⚠️ Modification Not Allowed_`;
    
    await reply(text);
  }
};
