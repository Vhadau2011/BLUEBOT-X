/**
 * Eval Command
 * Category: Dev
 * Developer: mudau_t
 */

export default {
  name: 'eval',
  aliases: ['exec'],
  category: 'dev',
  description: 'Execute code',
  usage: '.eval [code]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Eval Command*\n\n`;
    text += `This is the eval command in the dev category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
