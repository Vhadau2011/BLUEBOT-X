/**
 * Debug Command
 * Category: Dev
 * Developer: mudau_t
 */

export default {
  name: 'debug',
  aliases: ['debugmode'],
  category: 'dev',
  description: 'Toggle debug mode',
  usage: '.debug [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Debug Command*\n\n`;
    text += `This is the debug command in the dev category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
