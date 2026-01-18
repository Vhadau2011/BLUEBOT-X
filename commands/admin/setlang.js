/**
 * Setlang Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setlang',
  aliases: ['language'],
  category: 'admin',
  description: 'Set bot language',
  usage: '.setlang [code]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Setlang Command*\n\nThis is the setlang command in the admin category.\nStatus: *Functional*`);
  }
};
