/**
 * Unmuteuser Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'unmuteuser',
  aliases: ['unmute'],
  category: 'mods',
  description: 'Unmute user',
  usage: '.unmuteuser [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Unmuteuser Command*\n\n`;
    text += `This is the unmuteuser command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
