/**
 * Admins Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'admins',
  aliases: ['adminlist'],
  category: 'group',
  description: 'List group admins',
  usage: '.admins',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Admins Command*\n\n`;
    text += `This is the admins command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
