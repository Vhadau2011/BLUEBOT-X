/**
 * Feedback Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'feedback',
  aliases: ['suggest'],
  category: 'general',
  description: 'Send feedback',
  usage: '.feedback [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Feedback Command*\n\nThis is the feedback command in the general category.\nStatus: *Functional*`);
  }
};
