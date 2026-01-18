/**
 * Profile Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'profile',
  aliases: ['myprofile'],
  category: 'general',
  description: 'Your profile info',
  usage: '.profile',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Profile Command*\n\n`;
    text += `This is the profile command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
