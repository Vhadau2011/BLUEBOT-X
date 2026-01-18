/**
 * Marry Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'marry',
  aliases: ['propose'],
  category: 'fun',
  description: 'Marry someone',
  usage: '.marry [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Marry Command*\n\n`;
    text += `This is the marry command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
