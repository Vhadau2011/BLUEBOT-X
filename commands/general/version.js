/**
 * Version Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'version',
  aliases: ['ver'],
  category: 'general',
  description: 'Show bot version',
  usage: '.version',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Version Command*\n\n`;
    text += `This is the version command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
