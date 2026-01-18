/**
 * Sigma Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'sigma',
  aliases: ['sigmarate'],
  category: 'fun',
  description: 'Sigma rate',
  usage: '.sigma [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Sigma Command*\n\n`;
    text += `This is the sigma command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
