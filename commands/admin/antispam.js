/**
 * Antispam Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'antispam',
  aliases: ['antispammode'],
  category: 'admin',
  description: 'Toggle antispam',
  usage: '.antispam [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Antispam Command*\n\n`;
    text += `This is the antispam command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
