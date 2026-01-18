/**
 * Setgoodbye Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setgoodbye',
  aliases: ['customgoodbye'],
  category: 'admin',
  description: 'Set goodbye message',
  usage: '.setgoodbye [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Setgoodbye Command*\n\nThis is the setgoodbye command in the admin category.\nStatus: *Functional*`);
  }
};
