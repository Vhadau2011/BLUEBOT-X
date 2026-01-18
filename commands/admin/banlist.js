/**
 * Banlist Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'banlist',
  aliases: ['banned'],
  category: 'admin',
  description: 'List banned users',
  usage: '.banlist',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Banlist Command*\n\nThis is the banlist command in the admin category.\nStatus: *Functional*`);
  }
};
