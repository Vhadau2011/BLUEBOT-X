/**
 * Short Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
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
    try {
if (!args[0]) return reply("❌ Provide URL!"); try { const res = await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`); await reply(`🔗 *Shortened:* ${res.data}`); } catch { reply("❌ Error!"); }
    } catch (error) {
      console.error(`Error in short command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
