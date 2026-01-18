/**
 * Rps Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'rps',
  aliases: ['rockpaperscissors'],
  category: 'fun',
  description: 'Rock paper scissors',
  usage: '.rps [choice]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Rps Command*\n\n`;
    text += `This is the rps command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
