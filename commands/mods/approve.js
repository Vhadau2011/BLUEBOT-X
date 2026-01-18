/**
 * Approve Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'approve',
  aliases: ['whitelist'],
  category: 'mods',
  description: 'Approve user',
  usage: '.approve [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Approve Command*\n\n`;
    text += `This is the approve command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
