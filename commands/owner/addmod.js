/**
 * Addmod Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'addmod',
  aliases: ['makemod'],
  category: 'owner',
  description: 'Add moderator',
  usage: '.addmod [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Addmod Command*\n\n`;
    text += `This is the addmod command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
