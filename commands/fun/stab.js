/**
 * Stab Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'stab',
  aliases: ['stabme'],
  category: 'fun',
  description: 'Stab someone',
  usage: '.stab [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Stab Command*\n\n`;
    text += `This is the stab command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
