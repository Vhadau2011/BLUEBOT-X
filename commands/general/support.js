/**
 * Support Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'support',
  aliases: ['help'],
  category: 'general',
  description: 'Get support information',
  usage: '.support',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Support Command*\n\nThis is the support command in the general category.\nStatus: *Functional*`);
  }
};
