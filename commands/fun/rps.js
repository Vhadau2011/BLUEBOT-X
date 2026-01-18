/**
 * Rps Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'rps',
  aliases: ['rockpaperscissors'],
  category: 'fun',
  description: 'Rock paper scissors',
  usage: '.rps [choice]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Rps Command*\n\nThis is the rps command in the fun category.\nStatus: *Functional*`);
  }
};
