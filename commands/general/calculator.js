/**
 * Calculator Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'calculator',
  aliases: ['calc'],
  category: 'general',
  description: 'Calculate math',
  usage: '.calculator [expression]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Calculator Command*\n\n`;
    text += `This is the calculator command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
