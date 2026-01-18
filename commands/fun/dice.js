/**
 * Dice Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'dice',
  aliases: ['roll'],
  category: 'fun',
  description: 'Roll dice',
  usage: '.dice',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    const res = Math.floor(Math.random() * 6) + 1;
    await reply(`🎲 *You rolled:* ${res}`);
  }
};
