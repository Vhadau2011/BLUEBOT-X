/**
 * Pat Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'pat',
  aliases: ['headpat'],
  category: 'fun',
  description: 'Pat someone',
  usage: '.pat [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Pat Command*\n\n`;
    text += `This is the pat command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
