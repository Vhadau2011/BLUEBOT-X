/**
 * Joke Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'joke',
  aliases: ['funny'],
  category: 'general',
  description: 'Random joke',
  usage: '.joke',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const res = await axios.get("https://official-joke-api.appspot.com/random_joke"); await reply(`😂 *${res.data.setup}*\n\n${res.data.punchline}`);
    } catch (error) {
      console.error(`Error in joke command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
