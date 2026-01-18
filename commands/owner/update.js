/**
 * Update Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'update',
  aliases: ['updatebot'],
  category: 'owner',
  description: 'Update bot',
  usage: '.update',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Update Command*\n\n`;
    text += `This is the update command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
