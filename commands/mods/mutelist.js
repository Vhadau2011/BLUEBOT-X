/**
 * Mutelist Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'mutelist',
  aliases: ['muted'],
  category: 'mods',
  description: 'List muted users',
  usage: '.mutelist',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Mutelist Command*\n\n`;
    text += `This is the mutelist command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
