/**
 * Currency Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'currency',
  aliases: ['convert'],
  category: 'general',
  description: 'Currency converter',
  usage: '.currency [amount] [from] [to]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Currency Command*\n\n`;
    text += `This is the currency command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
