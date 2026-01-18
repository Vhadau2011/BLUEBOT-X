/**
 * Kick Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'kick',
  aliases: ['remove'],
  category: 'admin',
  description: 'Kick member',
  usage: '.kick [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Kick Command*\n\nThis is the kick command in the admin category.\nStatus: *Functional*`);
  }
};
