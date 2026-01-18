/**
 * Rules Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'rules',
  aliases: ['grouprules'],
  category: 'mods',
  description: 'View group rules',
  usage: '.rules',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Rules Command*\n\n`;
    text += `This is the rules command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
