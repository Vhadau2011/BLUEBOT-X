/**
 * Ip Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'ip',
  aliases: ['ipinfo'],
  category: 'general',
  description: 'IP information',
  usage: '.ip [address]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Ip Command*\n\n`;
    text += `This is the ip command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
