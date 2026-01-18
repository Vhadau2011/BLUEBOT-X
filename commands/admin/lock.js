/**
 * Lock Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'lock',
  aliases: ['lockgroup'],
  category: 'admin',
  description: 'Lock group settings',
  usage: '.lock',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Lock Command*\n\n`;
    text += `This is the lock command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
