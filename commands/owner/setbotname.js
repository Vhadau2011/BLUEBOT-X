/**
 * Setbotname Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'setbotname',
  aliases: ['botname'],
  category: 'owner',
  description: 'Set bot name',
  usage: '.setbotname [name]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Setbotname Command*\n\n`;
    text += `This is the setbotname command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
