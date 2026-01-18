/**
 * Truth Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'truth',
  aliases: ['truthordare'],
  category: 'fun',
  description: 'Truth question',
  usage: '.truth',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Truth Command*\n\n`;
    text += `This is the truth command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
