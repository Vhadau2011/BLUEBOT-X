/**
 * Coinflip Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'coinflip',
  aliases: ['flip'],
  category: 'fun',
  description: 'Flip coin',
  usage: '.coinflip',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    const res = Math.random() < 0.5 ? 'Heads' : 'Tails';
    await reply(`🪙 *Result:* ${res}`);
  }
};
