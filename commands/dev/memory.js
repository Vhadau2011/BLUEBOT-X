/**
 * Memory Command
 * Category: Dev
 * Developer: mudau_t
 */

export default {
  name: 'memory',
  aliases: ['ram'],
  category: 'dev',
  description: 'Memory usage',
  usage: '.memory',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Memory Command*\n\n`;
    text += `This is the memory command in the dev category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
