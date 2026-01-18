/**
 * Owner Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'owner',
  aliases: ['ownerinfo'],
  category: 'general',
  description: 'Display owner information',
  usage: '.owner',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `╔════════════════════════╗\n`;
    text += `║  👑 OWNER INFO  ║\n`;
    text += `╚════════════════════════╝\n\n`;
    text += `👤 *Name:* mudau_t\n`;
    text += `📱 *Number:* +27747815326\n`;
    text += `🌍 *Location:* South Africa\n`;
    text += `💼 *Role:* Bot Developer\n\n`;
    text += `_Contact for support or inquiries_`;
    await reply(text);
  }
};
