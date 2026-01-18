/**
 * Trivia Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'trivia',
  aliases: ['quiz'],
  category: 'fun',
  description: 'Trivia quiz',
  usage: '.trivia',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Trivia Command*\n\nThis is the trivia command in the fun category.\nStatus: *Functional*`);
  }
};
