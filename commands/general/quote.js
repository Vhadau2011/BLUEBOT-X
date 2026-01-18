/**
 * Quote Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'quote',
  aliases: ['randomquote'],
  category: 'general',
  description: 'Random quote',
  usage: '.quote',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const res = await axios.get("https://api.quotable.io/random"); await reply(`“${res.data.content}”\n\n— *${res.data.author}*`);
    } catch (error) {
      console.error(`Error in quote command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
