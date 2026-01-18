/**
 * Wiki Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'wiki',
  aliases: ['wikipedia'],
  category: 'general',
  description: 'Wikipedia search',
  usage: '.wiki [query]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!args[0]) return reply('❌ What do you want to search on Wikipedia?');
    try {
        const res = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(args.join('_'))}`);
        await reply(`📖 *${res.data.title}*\n\n${res.data.extract}\n\n🔗 ${res.data.content_urls.desktop.page}`);
    } catch { reply('❌ No Wikipedia entry found!'); }
  }
};
