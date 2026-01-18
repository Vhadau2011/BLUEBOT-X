/**
 * Simp Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'simp',
  aliases: ['simprate'],
  category: 'fun',
  description: 'Simp rate',
  usage: '.simp [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const p = Math.floor(Math.random()*101); await reply(`🥺 *Simp Rate:* ${p}%`);
    } catch (error) {
      console.error(`Error in simp command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
