/**
 * Fact Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'fact',
  aliases: ['randomfact'],
  category: 'general',
  description: 'Random fact',
  usage: '.fact',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Fact Command*\n\n`;
    text += `This is the fact command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
