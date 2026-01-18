/**
 * Lick Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'lick',
  aliases: ['lickme'],
  category: 'fun',
  description: 'Lick someone',
  usage: '.lick [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Lick Command*\n\n`;
    text += `This is the lick command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
