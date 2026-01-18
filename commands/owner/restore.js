/**
 * Restore Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'restore',
  aliases: ['restoreall'],
  category: 'owner',
  description: 'Restore all data',
  usage: '.restore',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Restore Command*\n\n`;
    text += `This is the restore command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
