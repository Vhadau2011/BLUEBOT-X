/**
 * Rate Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
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
    try {
const r = Math.floor(Math.random()*11); await reply(`⭐ *Rating:* ${r}/10`);
    } catch (error) {
      console.error(`Error in rate command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
