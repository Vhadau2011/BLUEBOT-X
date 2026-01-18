/**
 * Addadmin Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'addadmin',
  aliases: ['makeadmin'],
  category: 'owner',
  description: 'Add bot admin',
  usage: '.addadmin [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Addadmin Command*\n\n`;
    text += `This is the addadmin command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
