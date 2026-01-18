/**
 * Shop Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'shop',
  aliases: ['store'],
  category: 'general',
  description: 'Bot shop',
  usage: '.shop',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Shop Command*\n\n`;
    text += `This is the shop command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
