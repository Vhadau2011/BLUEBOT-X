/**
 * Compliment Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'compliment',
  aliases: ['praise'],
  category: 'fun',
  description: 'Compliment someone',
  usage: '.compliment [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const c = ["You are awesome!", "You have a great smile.", "You are very smart."]; await reply(`✨ *Compliment:* ${c[Math.floor(Math.random()*c.length)]}`);
    } catch (error) {
      console.error(`Error in compliment command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
