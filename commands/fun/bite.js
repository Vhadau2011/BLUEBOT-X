/**
 * Bite Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'bite',
  aliases: ['biteme'],
  category: 'fun',
  description: 'Bite someone',
  usage: '.bite [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Bite Command*\n\n`;
    text += `This is the bite command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
