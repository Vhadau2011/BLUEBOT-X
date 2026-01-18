/**
 * Lyrics Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
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
    try {
if (!args[0]) return reply("❌ Provide song!"); await reply(`🎵 *Lyrics:* https://www.google.com/search?q=${encodeURIComponent(args.join(" ") + " lyrics")}`);
    } catch (error) {
      console.error(`Error in lyrics command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
