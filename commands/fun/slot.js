/**
 * Slot Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'slot',
  aliases: ['slots'],
  category: 'fun',
  description: 'Slot machine',
  usage: '.slot',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Slot Command*\n\n`;
    text += `This is the slot command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
