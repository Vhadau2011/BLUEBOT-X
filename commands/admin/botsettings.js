/**
 * Botsettings Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'botsettings',
  aliases: ['bsettings'],
  category: 'admin',
  description: 'Bot settings',
  usage: '.botsettings',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Botsettings Command*\n\nThis is the botsettings command in the admin category.\nStatus: *Functional*`);
  }
};
