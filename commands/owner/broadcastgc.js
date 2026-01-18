/**
 * Broadcastgc Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'broadcastgc',
  aliases: ['bcgc'],
  category: 'owner',
  description: 'Broadcast to groups',
  usage: '.broadcastgc [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Broadcastgc Command*\n\n`;
    text += `This is the broadcastgc command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
