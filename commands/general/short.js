/**
 * Short Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'short',
  aliases: ['shorturl'],
  category: 'general',
  description: 'Shorten URL',
  usage: '.short [url]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!args[0]) return reply('❌ Please provide a URL!');
    try {
        const res = await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`);
        await reply(`🔗 *Shortened URL:* ${res.data}`);
    } catch { reply('❌ Failed to shorten URL!'); }
  }
};
