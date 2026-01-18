/**
 * Autoreply Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'autoreply',
  aliases: ['autoreplymode'],
  category: 'admin',
  description: 'Toggle autoreply',
  usage: '.autoreply [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Autoreply Command*\n\nThis is the autoreply command in the admin category.\nStatus: *Functional*`);
  }
};
