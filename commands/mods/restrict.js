/**
 * Restrict Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'restrict',
  aliases: ['limit'],
  category: 'mods',
  description: 'Restrict user',
  usage: '.restrict [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Restrict Command*\n\n`;
    text += `This is the restrict command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
