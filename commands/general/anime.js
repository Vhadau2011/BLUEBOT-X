/**
 * Anime Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
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
    try {
if (!args[0]) return reply("❌ Provide name!"); try { const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${args[0]}&limit=1`); const d = res.data.data[0]; await sock.sendMessage(from, { image: { url: d.images.jpg.image_url }, caption: `📺 *${d.title}*\n🌟 Score: ${d.score}\n📝 ${d.synopsis.slice(0, 200)}...` }); } catch { reply("❌ Not found!"); }
    } catch (error) {
      console.error(`Error in anime command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
