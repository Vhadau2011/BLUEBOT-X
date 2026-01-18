/**
 * Horoscope Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'horoscope',
  aliases: ['zodiac'],
  category: 'fun',
  description: 'Daily horoscope',
  usage: '.horoscope [sign]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply(`♈ *Horoscope:* Today is a good day for new beginnings.`);
    } catch (error) {
      console.error(`Error in horoscope command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
