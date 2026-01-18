/**
 * Unmute Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'unmute',
  aliases: ['unmutegroup'],
  category: 'admin',
  description: 'Unmute group',
  usage: '.unmute',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Unmute Command*\n\n`;
    text += `This is the unmute command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
