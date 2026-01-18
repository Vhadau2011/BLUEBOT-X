/**
 * Features Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'features',
  aliases: ['feat'],
  category: 'general',
  description: 'List bot features',
  usage: '.features',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Features Command*\n\n`;
    text += `This is the features command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
