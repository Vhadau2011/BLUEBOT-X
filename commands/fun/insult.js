/**
 * Insult Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'insult',
  aliases: ['mock'],
  category: 'fun',
  description: 'Insult generator',
  usage: '.insult',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Insult Command*\n\nThis is the insult command in the fun category.\nStatus: *Functional*`);
  }
};
