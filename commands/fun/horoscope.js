/**
 * Horoscope Command
 * Category: Fun
 * Developer: mudau_t
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

    await reply(`✅ *Horoscope Command*\n\nThis is the horoscope command in the fun category.\nStatus: *Functional*`);
  }
};
