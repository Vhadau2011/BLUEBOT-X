/**
 * Meme Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
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
try { const res = await axios.get("https://meme-api.com/gimme"); await sock.sendMessage(from, { image: { url: res.data.url }, caption: res.data.title }); } catch { reply("❌ Error!"); }
    } catch (error) {
      console.error(`Error in meme command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
