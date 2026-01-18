/**
 * Sigma Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'sigma',
  aliases: ['sigmarate'],
  category: 'fun',
  description: 'Sigma rate',
  usage: '.sigma [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const p = Math.floor(Math.random()*101); await reply(`🗿 *Sigma Rate:* ${p}%`);
    } catch (error) {
      console.error(`Error in sigma command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
