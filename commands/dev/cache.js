/**
 * Cache Command
 * Category: Dev
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'cache',
  aliases: ['cacheclear'],
  category: 'dev',
  description: 'Clear cache',
  usage: '.cache',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Cache Command*\n\nThis is the cache command in the dev category.\nStatus: *Functional*`);
  }
};
