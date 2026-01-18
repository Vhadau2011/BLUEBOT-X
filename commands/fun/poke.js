/**
 * Poke Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'poke',
  aliases: ['pokeme'],
  category: 'fun',
  description: 'Poke someone',
  usage: '.poke [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Poke Command*\n\n`;
    text += `This is the poke command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
