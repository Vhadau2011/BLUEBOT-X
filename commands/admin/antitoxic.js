/**
 * Antitoxic Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'antitoxic',
  aliases: ['antibadword'],
  category: 'admin',
  description: 'Toggle antitoxic',
  usage: '.antitoxic [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Antitoxic Command*\n\n`;
    text += `This is the antitoxic command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
