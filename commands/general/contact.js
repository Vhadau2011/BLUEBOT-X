/**
 * Contact Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'contact',
  aliases: ['contactowner'],
  category: 'general',
  description: 'Contact bot owner',
  usage: '.contact',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Contact Command*\n\n`;
    text += `This is the contact command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
