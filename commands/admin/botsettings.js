/**
 * Botsettings Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'botsettings',
  aliases: ['bsettings'],
  category: 'admin',
  description: 'Bot settings',
  usage: '.botsettings',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Botsettings Command*\n\n`;
    text += `This is the botsettings command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
