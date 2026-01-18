/**
 * Antibot Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'antibot',
  aliases: ['antibotmode'],
  category: 'admin',
  description: 'Toggle antibot',
  usage: '.antibot [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Antibot Command*\n\nThis is the antibot command in the admin category.\nStatus: *Functional*`);
  }
};
