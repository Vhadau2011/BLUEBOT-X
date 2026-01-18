/**
 * Rate Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'rate',
  aliases: ['rateit'],
  category: 'fun',
  description: 'Rate something',
  usage: '.rate [thing]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Rate Command*\n\n`;
    text += `This is the rate command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
