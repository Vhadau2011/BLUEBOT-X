/**
 * Rate Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'rate',
  aliases: ['rateit'],
  category: 'fun',
  description: 'Rate something',
  usage: '.rate [thing]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Rate Command*\n\nThis is the rate command in the fun category.\nStatus: *Functional*`);
  }
};
