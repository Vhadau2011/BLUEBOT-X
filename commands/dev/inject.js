/**
 * Inject Command
 * Category: Dev
 * Developer: mudau_t
 */

export default {
  name: 'inject',
  aliases: ['injectcode'],
  category: 'dev',
  description: 'Inject code',
  usage: '.inject [code]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Inject Command*\n\n`;
    text += `This is the inject command in the dev category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
