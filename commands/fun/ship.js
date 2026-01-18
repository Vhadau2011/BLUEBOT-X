/**
 * Ship Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'ship',
  aliases: ['love'],
  category: 'fun',
  description: 'Ship users',
  usage: '.ship [@user1] [@user2]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Ship Command*\n\n`;
    text += `This is the ship command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
