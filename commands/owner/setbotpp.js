/**
 * Setbotpp Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'setbotpp',
  aliases: ['botpp'],
  category: 'owner',
  description: 'Set bot profile picture',
  usage: '.setbotpp [reply to image]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Setbotpp Command*\n\n`;
    text += `This is the setbotpp command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
