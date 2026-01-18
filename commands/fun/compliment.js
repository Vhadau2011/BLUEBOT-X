/**
 * Compliment Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'compliment',
  aliases: ['praise'],
  category: 'fun',
  description: 'Compliment someone',
  usage: '.compliment [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Compliment Command*\n\nThis is the compliment command in the fun category.\nStatus: *Functional*`);
  }
};
