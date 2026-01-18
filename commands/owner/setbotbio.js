/**
 * Setbotbio Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'setbotbio',
  aliases: ['botbio'],
  category: 'owner',
  description: 'Set bot bio',
  usage: '.setbotbio [bio]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Setbotbio Command*\n\n`;
    text += `This is the setbotbio command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
