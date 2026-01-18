/**
 * Autoreply Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'autoreply',
  aliases: ['autoreplymode'],
  category: 'admin',
  description: 'Toggle autoreply',
  usage: '.autoreply [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Autoreply Command*\n\n`;
    text += `This is the autoreply command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
