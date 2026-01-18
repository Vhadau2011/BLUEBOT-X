/**
 * Roast Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'roast',
  aliases: ['burn'],
  category: 'fun',
  description: 'Roast someone',
  usage: '.roast [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const r = ["You are like a cloud. When you disappear, it is a beautiful day.", "I would roast you, but my mom told me not to burn trash."]; await reply(`🔥 *Roast:* ${r[Math.floor(Math.random()*r.length)]}`);
    } catch (error) {
      console.error(`Error in roast command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
