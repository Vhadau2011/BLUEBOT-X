/**
 * Ship Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
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
    try {
const p = Math.floor(Math.random()*101); await reply(`❤️ *Ship Rate:* ${p}%`);
    } catch (error) {
      console.error(`Error in ship command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
