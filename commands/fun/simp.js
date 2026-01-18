/**
 * Simp Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'simp',
  aliases: ['simprate'],
  category: 'fun',
  description: 'Simp rate',
  usage: '.simp [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Simp Command*\n\n`;
    text += `This is the simp command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
