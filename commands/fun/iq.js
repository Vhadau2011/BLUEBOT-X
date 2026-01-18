/**
 * Iq Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'iq',
  aliases: ['iqtest'],
  category: 'fun',
  description: 'IQ test',
  usage: '.iq [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const p = Math.floor(Math.random()*150)+50; await reply(`🧠 *IQ:* ${p}`);
    } catch (error) {
      console.error(`Error in iq command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
