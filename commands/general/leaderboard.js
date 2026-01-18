/**
 * Leaderboard Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'leaderboard',
  aliases: ['top'],
  category: 'general',
  description: 'Top users',
  usage: '.leaderboard',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Leaderboard Command*\n\nThis is the leaderboard command in the general category.\nStatus: *Functional*`);
  }
};
