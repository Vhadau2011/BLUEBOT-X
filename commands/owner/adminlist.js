/**
 * Adminlist Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'adminlist',
  aliases: ['admins'],
  category: 'owner',
  description: 'List bot admins',
  usage: '.adminlist',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Adminlist Command*\n\n`;
    text += `This is the adminlist command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
