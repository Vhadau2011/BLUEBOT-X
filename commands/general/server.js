/**
 * Server Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'server',
  aliases: ['serverinfo'],
  category: 'general',
  description: 'Server information',
  usage: '.server',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Server Command*\n\n`;
    text += `This is the server command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
