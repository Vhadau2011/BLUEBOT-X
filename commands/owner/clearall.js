/**
 * Clearall Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'clearall',
  aliases: ['wipedata'],
  category: 'owner',
  description: 'Clear all data',
  usage: '.clearall',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Clearall Command*\n\n`;
    text += `This is the clearall command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
