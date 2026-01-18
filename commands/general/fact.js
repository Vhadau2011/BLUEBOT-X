/**
 * Fact Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'fact',
  aliases: ['randomfact'],
  category: 'general',
  description: 'Random fact',
  usage: '.fact',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const res = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en"); await reply(`💡 *Fact:* ${res.data.text}`);
    } catch (error) {
      console.error(`Error in fact command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
