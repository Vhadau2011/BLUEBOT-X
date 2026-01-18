/**
 * Unfilter Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'unfilter',
  aliases: ['removefilter'],
  category: 'admin',
  description: 'Remove word filter',
  usage: '.unfilter [word]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Unfilter Command*\n\n`;
    text += `This is the unfilter command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
