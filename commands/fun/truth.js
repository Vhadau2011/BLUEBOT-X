/**
 * Truth Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'truth',
  aliases: ['truthordare'],
  category: 'fun',
  description: 'Truth question',
  usage: '.truth',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const t = ["What is your biggest secret?", "Who do you like?", "Ever lied to a friend?"]; await reply(`💡 *Truth:* ${t[Math.floor(Math.random()*t.length)]}`);
    } catch (error) {
      console.error(`Error in truth command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
