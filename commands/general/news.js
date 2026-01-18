/**
 * News Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'news',
  aliases: ['latestnews'],
  category: 'general',
  description: 'Latest news',
  usage: '.news [category]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *News Command*\n\n`;
    text += `This is the news command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
