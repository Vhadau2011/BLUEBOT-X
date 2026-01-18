/**
 * Feedback Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'feedback',
  aliases: ['suggest'],
  category: 'general',
  description: 'Send feedback',
  usage: '.feedback [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Feedback Command*\n\n`;
    text += `This is the feedback command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
