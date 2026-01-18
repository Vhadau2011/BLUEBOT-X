/**
 * Meme Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'meme',
  aliases: ['randommeme'],
  category: 'general',
  description: 'Random meme',
  usage: '.meme',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Meme Command*\n\n`;
    text += `This is the meme command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
