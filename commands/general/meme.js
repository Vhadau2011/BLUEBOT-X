/**
 * Meme Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'meme',
  aliases: ['randommeme'],
  category: 'general',
  description: 'Random meme',
  usage: '.meme',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    try {
        const res = await axios.get('https://meme-api.com/gimme');
        await sock.sendMessage(from, { image: { url: res.data.url }, caption: `🤣 *${res.data.title}*` }, { quoted: msg });
    } catch { reply('❌ Failed to fetch meme!'); }
  }
};
