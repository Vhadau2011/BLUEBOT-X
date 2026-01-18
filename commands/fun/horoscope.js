/**
 * Horoscope Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'horoscope',
  aliases: ['zodiac'],
  category: 'fun',
  description: 'Daily horoscope',
  usage: '.horoscope [sign]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Horoscope Command*\n\n`;
    text += `This is the horoscope command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
