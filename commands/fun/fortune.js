/**
 * Fortune Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'fortune',
  aliases: ['fortuneteller'],
  category: 'fun',
  description: 'Fortune telling',
  usage: '.fortune',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Fortune Command*\n\n`;
    text += `This is the fortune command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
