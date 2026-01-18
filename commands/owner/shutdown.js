/**
 * Shutdown Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'shutdown',
  aliases: ['stop'],
  category: 'owner',
  description: 'Shutdown bot',
  usage: '.shutdown',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Shutdown Command*\n\n`;
    text += `This is the shutdown command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
