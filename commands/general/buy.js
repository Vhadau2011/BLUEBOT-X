/**
 * Buy Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'buy',
  aliases: ['purchase'],
  category: 'general',
  description: 'Buy items',
  usage: '.buy [item]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Buy Command*\n\n`;
    text += `This is the buy command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
