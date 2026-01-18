/**
 * Pickup Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'pickup',
  aliases: ['pickupline'],
  category: 'fun',
  description: 'Pickup line',
  usage: '.pickup',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Pickup Command*\n\n`;
    text += `This is the pickup command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
