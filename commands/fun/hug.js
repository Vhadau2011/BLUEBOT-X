/**
 * Hug Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'hug',
  aliases: ['embrace'],
  category: 'fun',
  description: 'Hug someone',
  usage: '.hug [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Hug Command*\n\n`;
    text += `This is the hug command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
