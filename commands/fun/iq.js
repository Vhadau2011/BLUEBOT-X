/**
 * Iq Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'iq',
  aliases: ['iqtest'],
  category: 'fun',
  description: 'IQ test',
  usage: '.iq [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Iq Command*\n\n`;
    text += `This is the iq command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
