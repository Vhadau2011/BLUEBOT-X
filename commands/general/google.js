/**
 * Google Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'google',
  aliases: ['search'],
  category: 'general',
  description: 'Google search',
  usage: '.google [query]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!args[0]) return reply('❌ What do you want to search?');
    await reply(`🔍 *Searching Google for:* ${args.join(' ')}\n\nhttps://www.google.com/search?q=${encodeURIComponent(args.join(' '))}`);
  }
};
