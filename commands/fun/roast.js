/**
 * Roast Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'roast',
  aliases: ['burn'],
  category: 'fun',
  description: 'Roast someone',
  usage: '.roast [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Roast Command*\n\nThis is the roast command in the fun category.\nStatus: *Functional*`);
  }
};
