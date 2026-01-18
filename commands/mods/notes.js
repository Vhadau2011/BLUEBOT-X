/**
 * Notes Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'notes',
  aliases: ['notelist'],
  category: 'mods',
  description: 'List notes',
  usage: '.notes',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Notes Command*\n\n`;
    text += `This is the notes command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
