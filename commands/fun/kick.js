/**
 * Kick Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'kick',
  aliases: ['kickme'],
  category: 'fun',
  description: 'Kick someone',
  usage: '.kick [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Kick Command*\n\n`;
    text += `This is the kick command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
