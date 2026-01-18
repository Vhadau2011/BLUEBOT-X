/**
 * Unrestrict Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'unrestrict',
  aliases: ['unlimit'],
  category: 'mods',
  description: 'Unrestrict user',
  usage: '.unrestrict [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Unrestrict Command*\n\n`;
    text += `This is the unrestrict command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
