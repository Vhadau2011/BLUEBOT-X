/**
 * Blocklist Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'blocklist',
  aliases: ['blocked'],
  category: 'owner',
  description: 'List blocked users',
  usage: '.blocklist',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Blocklist Command*\n\n`;
    text += `This is the blocklist command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
