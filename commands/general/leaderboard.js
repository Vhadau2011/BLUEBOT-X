/**
 * Leaderboard Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'leaderboard',
  aliases: ['top'],
  category: 'general',
  description: 'Top users',
  usage: '.leaderboard',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Leaderboard Command*\n\n`;
    text += `This is the leaderboard command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
