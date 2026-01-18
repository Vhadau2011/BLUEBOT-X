/**
 * Dare Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'dare',
  aliases: ['dareq'],
  category: 'fun',
  description: 'Dare challenge',
  usage: '.dare',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Dare Command*\n\n`;
    text += `This is the dare command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
