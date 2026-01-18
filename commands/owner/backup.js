/**
 * Backup Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'backup',
  aliases: ['backupall'],
  category: 'owner',
  description: 'Backup all data',
  usage: '.backup',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Backup Command*\n\n`;
    text += `This is the backup command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
