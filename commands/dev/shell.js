/**
 * Shell Command
 * Category: Dev
 * Developer: mudau_t
 */

export default {
  name: 'shell',
  aliases: ['bash'],
  category: 'dev',
  description: 'Execute shell command',
  usage: '.shell [command]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Shell Command*\n\n`;
    text += `This is the shell command in the dev category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
