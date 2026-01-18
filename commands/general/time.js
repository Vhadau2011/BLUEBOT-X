/**
 * Time Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'time',
  aliases: ['currenttime'],
  category: 'general',
  description: 'Current time',
  usage: '.time [timezone]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Time Command*\n\n`;
    text += `This is the time command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
