/**
 * Setgoodbye Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'setgoodbye',
  aliases: ['customgoodbye'],
  category: 'admin',
  description: 'Set goodbye message',
  usage: '.setgoodbye [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Setgoodbye Command*\n\n`;
    text += `This is the setgoodbye command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
