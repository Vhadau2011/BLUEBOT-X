/**
 * Unblock Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'unblock',
  aliases: ['unblockuser'],
  category: 'owner',
  description: 'Unblock user',
  usage: '.unblock [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Unblock Command*\n\n`;
    text += `This is the unblock command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
