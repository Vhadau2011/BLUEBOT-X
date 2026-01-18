/**
 * Rps Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'rps',
  aliases: ['rockpaperscissors'],
  category: 'fun',
  description: 'Rock paper scissors',
  usage: '.rps [choice]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Choose rock, paper, or scissors!"); const c = ["rock", "paper", "scissors"]; const b = c[Math.floor(Math.random()*3)]; await reply(`🎮 *You:* ${args[0]}\n🤖 *Bot:* ${b}`);
    } catch (error) {
      console.error(`Error in rps command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
