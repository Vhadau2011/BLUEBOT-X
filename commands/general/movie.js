/**
 * Movie Command
 * Category: General
 * Developer: mudau_t
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

    if (!args[0]) return reply('❌ Provide a movie title!');
    try {
        const res = await axios.get(`http://www.omdbapi.com/?t=${args[0]}&apikey=efabc41a`);
        await sock.sendMessage(from, { image: { url: res.data.Poster }, caption: `🎬 *Movie: ${res.data.Title}*\n\n📅 Year: ${res.data.Year}\n🌟 Rating: ${res.data.imdbRating}\n🎭 Genre: ${res.data.Genre}\n📝 Plot: ${res.data.Plot}` }, { quoted: msg });
    } catch { reply('❌ Movie not found!'); }
  }
};
