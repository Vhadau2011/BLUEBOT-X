/**
 * Kill Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'kill',
  aliases: ['murder'],
  category: 'fun',
  description: 'Fake kill',
  usage: '.kill [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Kill Command*\n\n`;
    text += `This is the kill command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
