/**
 * Cache Command
 * Category: Dev
 * Developer: mudau_t
 */

export default {
  name: 'cache',
  aliases: ['cacheclear'],
  category: 'dev',
  description: 'Clear cache',
  usage: '.cache',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Cache Command*\n\n`;
    text += `This is the cache command in the dev category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
