/**
 * Filters Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'filters',
  aliases: ['filterlist'],
  category: 'admin',
  description: 'List filtered words',
  usage: '.filters',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Filters Command*\n\nThis is the filters command in the admin category.\nStatus: *Functional*`);
  }
};
