/**
 * Dictionary Command
 * Category: General
 * Developer: mudau_t
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

    if (!args[0]) return reply('❌ Provide a word!');
    try {
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${args[0]}`);
        const data = res.data[0];
        await reply(`📖 *Definition: ${data.word}*\n\n🔊 Phonetic: ${data.phonetic || 'N/A'}\n📝 Meaning: ${data.meanings[0].definitions[0].definition}`);
    } catch { reply('❌ Word not found!'); }
  }
};
