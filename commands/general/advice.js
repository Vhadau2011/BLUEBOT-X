/**
 * Advice Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'advice',
  aliases: ['tip'],
  category: 'general',
  description: 'Random advice',
  usage: '.advice',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Advice Command*\n\nThis is the advice command in the general category.\nStatus: *Functional*`);
  }
};
