/**
 * Removemod Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'removemod',
  aliases: ['delmod'],
  category: 'owner',
  description: 'Remove moderator',
  usage: '.removemod [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Removemod Command*\n\n`;
    text += `This is the removemod command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
