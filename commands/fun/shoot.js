/**
 * Shoot Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'shoot',
  aliases: ['shootme'],
  category: 'fun',
  description: 'Shoot someone',
  usage: '.shoot [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Shoot Command*\n\n`;
    text += `This is the shoot command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
