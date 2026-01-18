/**
 * Leave Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'leave',
  aliases: ['leavegroup'],
  category: 'owner',
  description: 'Leave group',
  usage: '.leave',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Leave Command*\n\n`;
    text += `This is the leave command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
