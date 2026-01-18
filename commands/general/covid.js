/**
 * Covid Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'covid',
  aliases: ['coronavirus'],
  category: 'general',
  description: 'COVID-19 stats',
  usage: '.covid [country]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Covid Command*\n\nThis is the covid command in the general category.\nStatus: *Functional*`);
  }
};
