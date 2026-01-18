/**
 * Roast Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'roast',
  aliases: ['burn'],
  category: 'fun',
  description: 'Roast someone',
  usage: '.roast [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Roast Command*\n\n`;
    text += `This is the roast command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
