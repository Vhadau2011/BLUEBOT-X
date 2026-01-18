/**
 * Wiki Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
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
    try {
if (!args[0]) return reply("❌ Provide query!"); try { const res = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(args.join("_"))}`); await reply(`📖 *${res.data.title}*\n\n${res.data.extract}`); } catch { reply("❌ Not found!"); }
    } catch (error) {
      console.error(`Error in wiki command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
