/**
 * Anime Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'anime',
  aliases: ['animeinfo'],
  category: 'general',
  description: 'Anime information',
  usage: '.anime [name]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Anime Command*\n\n`;
    text += `This is the anime command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
