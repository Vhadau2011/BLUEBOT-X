/**
 * Lyrics Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'lyrics',
  aliases: ['songlyrics'],
  category: 'general',
  description: 'Song lyrics',
  usage: '.lyrics [song name]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!args[0]) return reply('❌ Provide a song name!');
    await reply(`🎵 *Searching lyrics for:* ${args.join(' ')}\n\nhttps://www.google.com/search?q=${encodeURIComponent(args.join(' ') + ' lyrics')}`);
  }
};
