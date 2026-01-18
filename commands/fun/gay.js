/**
 * Gay Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'gay',
  aliases: ['gayrate'],
  category: 'fun',
  description: 'Gay rate',
  usage: '.gay [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Gay Command*\n\n`;
    text += `This is the gay command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
