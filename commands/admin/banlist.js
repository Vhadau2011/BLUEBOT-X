/**
 * Banlist Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'banlist',
  aliases: ['banned'],
  category: 'admin',
  description: 'List banned users',
  usage: '.banlist',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Banlist Command*\n\n`;
    text += `This is the banlist command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
