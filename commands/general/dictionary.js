/**
 * Dictionary Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'dictionary',
  aliases: ['define'],
  category: 'general',
  description: 'Define word',
  usage: '.dictionary [word]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Provide word!"); try { const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${args[0]}`); await reply(`📖 *${res.data[0].word}*\n📝 ${res.data[0].meanings[0].definitions[0].definition}`); } catch { reply("❌ Not found!"); }
    } catch (error) {
      console.error(`Error in dictionary command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
