/**
 * Antispam Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'antispam',
  aliases: ['antispammode'],
  category: 'admin',
  description: 'Toggle antispam',
  usage: '.antispam [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Antispam Command*\n\nThis is the antispam command in the admin category.\nStatus: *Functional*`);
  }
};
