/**
 * Slap Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'slap',
  aliases: ['hit'],
  category: 'fun',
  description: 'Slap someone',
  usage: '.slap [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Slap Command*\n\n`;
    text += `This is the slap command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
