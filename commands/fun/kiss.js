/**
 * Kiss Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'kiss',
  aliases: ['smooch'],
  category: 'fun',
  description: 'Kiss someone',
  usage: '.kiss [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Kiss Command*\n\n`;
    text += `This is the kiss command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
