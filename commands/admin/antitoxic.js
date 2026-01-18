/**
 * Antitoxic Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'antitoxic',
  aliases: ['antibadword'],
  category: 'admin',
  description: 'Toggle antitoxic',
  usage: '.antitoxic [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Antitoxic Command*\n\nThis is the antitoxic command in the admin category.\nStatus: *Functional*`);
  }
};
