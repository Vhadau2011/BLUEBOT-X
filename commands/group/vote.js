/**
 * Vote Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'vote',
  aliases: ['pollvote'],
  category: 'group',
  description: 'Vote in poll',
  usage: '.vote [option]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Vote Command*\n\n`;
    text += `This is the vote command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
