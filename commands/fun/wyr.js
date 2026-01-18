/**
 * Wyr Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: 'wyr',
  aliases: ['wouldyourather'],
  category: 'fun',
  description: 'Would you rather',
  usage: '.wyr',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Wyr Command*\n\n`;
    text += `This is the wyr command in the fun category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
