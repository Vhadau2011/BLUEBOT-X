/**
 * Report Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'report',
  aliases: ['reportbug'],
  category: 'general',
  description: 'Report a bug',
  usage: '.report [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Report Command*\n\n`;
    text += `This is the report command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
