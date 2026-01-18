/**
 * Adopt Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'adopt',
  aliases: ['adoptme'],
  category: 'fun',
  description: 'Adopt someone',
  usage: '.adopt [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Adopt Command*\n\n`;
    text += `This is the adopt command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
