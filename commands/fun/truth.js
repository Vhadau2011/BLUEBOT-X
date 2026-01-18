/**
 * Truth Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'truth',
  aliases: ['truthordare'],
  category: 'fun',
  description: 'Truth question',
  usage: '.truth',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Truth Command*\n\nThis is the truth command in the fun category.\nStatus: *Functional*`);
  }
};
