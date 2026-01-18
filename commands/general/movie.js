/**
 * Movie Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'movie',
  aliases: ['movieinfo'],
  category: 'general',
  description: 'Movie information',
  usage: '.movie [title]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Provide title!"); try { const res = await axios.get(`http://www.omdbapi.com/?t=${args[0]}&apikey=efabc41a`); await sock.sendMessage(from, { image: { url: res.data.Poster }, caption: `🎬 *${res.data.Title}*\n📅 ${res.data.Year}\n🌟 ${res.data.imdbRating}` }); } catch { reply("❌ Not found!"); }
    } catch (error) {
      console.error(`Error in movie command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
