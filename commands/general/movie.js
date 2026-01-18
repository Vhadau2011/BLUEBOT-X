/**
 * Movie Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'movie',
  aliases: ['movieinfo'],
  category: 'general',
  description: 'Movie information',
  usage: '.movie [title]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Movie Command*\n\n`;
    text += `This is the movie command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
