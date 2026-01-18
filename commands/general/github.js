/**
 * Github Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'github',
  aliases: ['ghuser'],
  category: 'general',
  description: 'GitHub user info',
  usage: '.github [username]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Github Command*\n\n`;
    text += `This is the github command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
