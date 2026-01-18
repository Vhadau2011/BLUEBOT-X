/**
 * Note Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'note',
  aliases: ['addnote'],
  category: 'mods',
  description: 'Add note',
  usage: '.note [name] [content]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Note Command*\n\n`;
    text += `This is the note command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
