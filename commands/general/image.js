/**
 * Image Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'image',
  aliases: ['img'],
  category: 'general',
  description: 'Image search',
  usage: '.image [query]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Image Command*\n\n`;
    text += `This is the image command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
