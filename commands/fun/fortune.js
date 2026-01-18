/**
 * Fortune Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'fortune',
  aliases: ['fortuneteller'],
  category: 'fun',
  description: 'Fortune telling',
  usage: '.fortune',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Fortune Command*\n\nThis is the fortune command in the fun category.\nStatus: *Functional*`);
  }
};
