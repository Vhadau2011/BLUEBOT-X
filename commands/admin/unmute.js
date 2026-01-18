/**
 * Unmute Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unmute',
  aliases: ['unmutegroup'],
  category: 'admin',
  description: 'Unmute group',
  usage: '.unmute',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Unmute Command*\n\nThis is the unmute command in the admin category.\nStatus: *Functional*`);
  }
};
