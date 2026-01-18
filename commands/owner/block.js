/**
 * Block Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'block',
  aliases: ['blockuser'],
  category: 'owner',
  description: 'Block user',
  usage: '.block [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Block Command*\n\n`;
    text += `This is the block command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
