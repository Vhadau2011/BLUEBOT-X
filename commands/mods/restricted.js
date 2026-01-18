/**
 * Restricted Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'restricted',
  aliases: ['limited'],
  category: 'mods',
  description: 'List restricted users',
  usage: '.restricted',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Restricted Command*\n\n`;
    text += `This is the restricted command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
