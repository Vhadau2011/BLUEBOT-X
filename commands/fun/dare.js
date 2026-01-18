/**
 * Dare Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'dare',
  aliases: ['dareq'],
  category: 'fun',
  description: 'Dare challenge',
  usage: '.dare',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Dare Command*\n\nThis is the dare command in the fun category.\nStatus: *Functional*`);
  }
};
