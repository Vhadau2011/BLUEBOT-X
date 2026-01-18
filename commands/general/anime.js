/**
 * Anime Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'anime',
  aliases: ['animeinfo'],
  category: 'general',
  description: 'Anime information',
  usage: '.anime [name]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!args[0]) return reply('❌ Provide an anime name!');
    try {
        const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${args[0]}&limit=1`);
        const data = res.data.data[0];
        await sock.sendMessage(from, { image: { url: data.images.jpg.image_url }, caption: `📺 *Anime: ${data.title}*\n\n🌟 Score: ${data.score}\n📅 Status: ${data.status}\n📝 Synopsis: ${data.synopsis.slice(0, 200)}...` }, { quoted: msg });
    } catch { reply('❌ Anime not found!'); }
  }
};
