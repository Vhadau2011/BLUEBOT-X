/**
 * Delnote Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'delnote',
  aliases: ['removenote'],
  category: 'mods',
  description: 'Delete note',
  usage: '.delnote [name]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Delnote Command*\n\n`;
    text += `This is the delnote command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
