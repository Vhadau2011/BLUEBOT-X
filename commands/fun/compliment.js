/**
 * Compliment Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'compliment',
  aliases: ['praise'],
  category: 'fun',
  description: 'Compliment someone',
  usage: '.compliment [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Compliment Command*\n\n`;
    text += `This is the compliment command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
