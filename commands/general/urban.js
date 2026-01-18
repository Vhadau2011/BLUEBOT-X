/**
 * Urban Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'urban',
  aliases: ['urbandictionary'],
  category: 'general',
  description: 'Urban dictionary',
  usage: '.urban [word]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!args[0]) return reply('❌ Provide a word!');
    try {
        const res = await axios.get(`https://api.urbandictionary.com/v0/define?term=${args[0]}`);
        const data = res.data.list[0];
        await reply(`🏙️ *Urban: ${data.word}*\n\n📝 Definition: ${data.definition.replace(/[\[\]]/g, '')}\n💡 Example: ${data.example.replace(/[\[\]]/g, '')}`);
    } catch { reply('❌ No definition found!'); }
  }
};
