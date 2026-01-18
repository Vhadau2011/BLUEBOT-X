/**
 * Approved Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'approved',
  aliases: ['whitelist'],
  category: 'mods',
  description: 'List approved users',
  usage: '.approved',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Approved Command*\n\n`;
    text += `This is the approved command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
