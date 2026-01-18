/**
 * Inventory Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'inventory',
  aliases: ['inv'],
  category: 'general',
  description: 'Your inventory',
  usage: '.inventory',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Inventory Command*\n\n`;
    text += `This is the inventory command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
