/**
 * Urban Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
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
    try {
if (!args[0]) return reply("❌ Provide word!"); try { const res = await axios.get(`https://api.urbandictionary.com/v0/define?term=${args[0]}`); await reply(`🏙️ *${res.data.list[0].word}*\n📝 ${res.data.list[0].definition.replace(/[\\[\\]]/g, "")}`); } catch { reply("❌ Not found!"); }
    } catch (error) {
      console.error(`Error in urban command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
