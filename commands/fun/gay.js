/**
 * Gay Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'gay',
  aliases: ['gayrate'],
  category: 'fun',
  description: 'Gay rate',
  usage: '.gay [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const p = Math.floor(Math.random()*101); await reply(`🏳️‍🌈 *Gay Rate:* ${p}%`);
    } catch (error) {
      console.error(`Error in gay command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
