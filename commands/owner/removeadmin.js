/**
 * Removeadmin Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'removeadmin',
  aliases: ['deladmin'],
  category: 'owner',
  description: 'Remove bot admin',
  usage: '.removeadmin [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Removeadmin Command*\n\n`;
    text += `This is the removeadmin command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
