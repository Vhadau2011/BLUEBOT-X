/**
 * Modlist Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'modlist',
  aliases: ['mods'],
  category: 'owner',
  description: 'List moderators',
  usage: '.modlist',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Modlist Command*\n\n`;
    text += `This is the modlist command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
