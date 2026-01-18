/**
 * Hack Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'hack',
  aliases: ['hacker'],
  category: 'fun',
  description: 'Fake hack',
  usage: '.hack [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Hack Command*\n\n`;
    text += `This is the hack command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
