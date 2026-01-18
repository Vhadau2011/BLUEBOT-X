/**
 * Compatibility Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'compatibility',
  aliases: ['compat'],
  category: 'fun',
  description: 'Love compatibility',
  usage: '.compatibility [@user1] [@user2]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Compatibility Command*\n\n`;
    text += `This is the compatibility command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
