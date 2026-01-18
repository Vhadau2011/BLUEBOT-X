/**
 * Joke Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'joke',
  aliases: ['funny'],
  category: 'general',
  description: 'Random joke',
  usage: '.joke',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Joke Command*\n\n`;
    text += `This is the joke command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
