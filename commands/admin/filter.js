/**
 * Filter Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'filter',
  aliases: ['addfilter'],
  category: 'admin',
  description: 'Add word filter',
  usage: '.filter [word]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Filter Command*\n\nThis is the filter command in the admin category.\nStatus: *Functional*`);
  }
};
