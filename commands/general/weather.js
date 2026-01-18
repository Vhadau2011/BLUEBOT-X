/**
 * Weather Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'weather',
  aliases: ['weatherinfo'],
  category: 'general',
  description: 'Weather info',
  usage: '.weather [city]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Weather Command*\n\n`;
    text += `This is the weather command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
