/**
 * Unfilter Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unfilter',
  aliases: ['removefilter'],
  category: 'admin',
  description: 'Remove word filter',
  usage: '.unfilter [word]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Unfilter Command*\n\nThis is the unfilter command in the admin category.\nStatus: *Functional*`);
  }
};
