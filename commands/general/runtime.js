/**
 * Runtime Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'runtime',
  aliases: ['uptime'],
  category: 'general',
  description: 'Show bot runtime',
  usage: '.runtime',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    const uptime = process.uptime();
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    
    let text = `⏱️ *Bot Runtime*\n\n`;
    text += `📅 Days: ${days}\n`;
    text += `🕐 Hours: ${hours}\n`;
    text += `⏰ Minutes: ${minutes}\n`;
    text += `⏱️ Seconds: ${seconds}\n\n`;
    text += `_Bot has been running smoothly!_`;
    await reply(text);
  }
};
