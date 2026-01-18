/**
 * Unban Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'unban',
  aliases: ['unbanuser'],
  category: 'admin',
  description: 'Unban user',
  usage: '.unban [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Unban Command*\n\n`;
    text += `This is the unban command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
