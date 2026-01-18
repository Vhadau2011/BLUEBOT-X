/**
 * Advice Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'advice',
  aliases: ['tip'],
  category: 'general',
  description: 'Random advice',
  usage: '.advice',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Advice Command*\n\n`;
    text += `This is the advice command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
