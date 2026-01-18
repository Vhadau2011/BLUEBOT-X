/**
 * Daily Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'daily',
  aliases: ['dailyreward'],
  category: 'general',
  description: 'Claim daily reward',
  usage: '.daily',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`🎁 *Daily Reward*\n\nYou claimed *500 coins*! Come back tomorrow.`);
  }
};
