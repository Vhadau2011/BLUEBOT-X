/**
 * Fortune Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'fortune',
  aliases: ['fortuneteller'],
  category: 'fun',
  description: 'Fortune telling',
  usage: '.fortune',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const f = ["You will have a great day!", "A surprise is coming your way.", "Be careful today."]; await reply(`🔮 *Fortune:* ${f[Math.floor(Math.random()*f.length)]}`);
    } catch (error) {
      console.error(`Error in fortune command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
