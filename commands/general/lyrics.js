/**
 * Lyrics Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'lyrics',
  aliases: ['songlyrics'],
  category: 'general',
  description: 'Song lyrics',
  usage: '.lyrics [song name]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Lyrics Command*\n\n`;
    text += `This is the lyrics command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
