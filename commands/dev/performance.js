/**
 * Performance Command
 * Category: Dev
 * Developer: mudau_t
 */

export default {
  name: 'performance',
  aliases: ['perf'],
  category: 'dev',
  description: 'Performance stats',
  usage: '.performance',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Performance Command*\n\n`;
    text += `This is the performance command in the dev category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
