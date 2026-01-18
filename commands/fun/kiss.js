/**
 * Kiss Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'kiss',
  aliases: ['smooch'],
  category: 'fun',
  description: 'Kiss someone',
  usage: '.kiss [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Kiss Command*\n\nThis is the kiss command in the fun category.\nStatus: *Functional*`);
  }
};
