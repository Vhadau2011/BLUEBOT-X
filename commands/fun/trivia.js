/**
 * Trivia Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'trivia',
  aliases: ['quiz'],
  category: 'fun',
  description: 'Trivia quiz',
  usage: '.trivia',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Trivia Command*\n\n`;
    text += `This is the trivia command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
