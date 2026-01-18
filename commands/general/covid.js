/**
 * Covid Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'covid',
  aliases: ['coronavirus'],
  category: 'general',
  description: 'COVID-19 stats',
  usage: '.covid [country]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Covid Command*\n\n`;
    text += `This is the covid command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
