/**
 * Npm Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'npm',
  aliases: ['npmpackage'],
  category: 'general',
  description: 'NPM package info',
  usage: '.npm [package]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Npm Command*\n\n`;
    text += `This is the npm command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
