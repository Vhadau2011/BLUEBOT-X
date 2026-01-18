/**
 * Cpu Command
 * Category: Dev
 * Developer: mudau_t
 */

export default {
  name: 'cpu',
  aliases: ['processor'],
  category: 'dev',
  description: 'CPU usage',
  usage: '.cpu',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Cpu Command*\n\n`;
    text += `This is the cpu command in the dev category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
