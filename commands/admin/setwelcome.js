/**
 * Setwelcome Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'setwelcome',
  aliases: ['customwelcome'],
  category: 'admin',
  description: 'Set welcome message',
  usage: '.setwelcome [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Setwelcome Command*\n\n`;
    text += `This is the setwelcome command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
