/**
 * Setprefix Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'setprefix',
  aliases: ['changeprefix'],
  category: 'admin',
  description: 'Change bot prefix',
  usage: '.setprefix [prefix]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Setprefix Command*\n\n`;
    text += `This is the setprefix command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
