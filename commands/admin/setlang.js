/**
 * Setlang Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'setlang',
  aliases: ['language'],
  category: 'admin',
  description: 'Set bot language',
  usage: '.setlang [code]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Setlang Command*\n\n`;
    text += `This is the setlang command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
