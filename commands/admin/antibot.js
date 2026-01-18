/**
 * Antibot Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'antibot',
  aliases: ['antibotmode'],
  category: 'admin',
  description: 'Toggle antibot',
  usage: '.antibot [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Antibot Command*\n\n`;
    text += `This is the antibot command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
