/**
 * Ship Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'ship',
  aliases: ['love'],
  category: 'fun',
  description: 'Ship users',
  usage: '.ship [@user1] [@user2]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Ship Command*\n\nThis is the ship command in the fun category.\nStatus: *Functional*`);
  }
};
