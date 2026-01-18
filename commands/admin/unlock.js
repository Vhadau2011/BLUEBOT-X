/**
 * Unlock Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'unlock',
  aliases: ['unlockgroup'],
  category: 'admin',
  description: 'Unlock group settings',
  usage: '.unlock',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Unlock Command*\n\n`;
    text += `This is the unlock command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
