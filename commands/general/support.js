/**
 * Support Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'support',
  aliases: ['help'],
  category: 'general',
  description: 'Get support information',
  usage: '.support',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `╔════════════════════════╗\n`;
    text += `║  🆘 SUPPORT  ║\n`;
    text += `╚════════════════════════╝\n\n`;
    text += `Need help? Contact us:\n\n`;
    text += `📱 WhatsApp: +27747815326\n`;
    text += `📧 Email: support@bluebot.com\n`;
    text += `🌐 Website: bluebot.com\n`;
    text += `💬 Discord: discord.gg/bluebot\n\n`;
    text += `_We're here to help!_`;
    await reply(text);
  }
};
