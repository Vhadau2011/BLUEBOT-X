/**
 * Rank Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'rank',
  aliases: ['level'],
  category: 'general',
  description: 'Your rank in bot',
  usage: '.rank',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Rank Command*\n\nThis is the rank command in the general category.\nStatus: *Functional*`);
  }
};
