/**
 * Balance Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'balance',
  aliases: ['bal'],
  category: 'general',
  description: 'Check your balance',
  usage: '.balance',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Balance Command*\n\n`;
    text += `This is the balance command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
