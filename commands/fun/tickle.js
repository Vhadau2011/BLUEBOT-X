/**
 * Tickle Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'tickle',
  aliases: ['tickleme'],
  category: 'fun',
  description: 'Tickle someone',
  usage: '.tickle [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Tickle Command*\n\n`;
    text += `This is the tickle command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
