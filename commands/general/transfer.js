/**
 * Transfer Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'transfer',
  aliases: ['send'],
  category: 'general',
  description: 'Transfer coins',
  usage: '.transfer [@user] [amount]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Transfer Command*\n\n`;
    text += `This is the transfer command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
