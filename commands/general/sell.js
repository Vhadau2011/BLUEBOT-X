/**
 * Sell Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'sell',
  aliases: ['sellit'],
  category: 'general',
  description: 'Sell items',
  usage: '.sell [item]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Sell Command*\n\nThis is the sell command in the general category.\nStatus: *Functional*`);
  }
};
