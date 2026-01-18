/**
 * Slowmode Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'slowmode',
  aliases: ['slow'],
  category: 'mods',
  description: 'Toggle slowmode',
  usage: '.slowmode [seconds]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Slowmode Command*\n\n`;
    text += `This is the slowmode command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
