/**
 * Trivia Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'trivia',
  aliases: ['quiz'],
  category: 'fun',
  description: 'Trivia quiz',
  usage: '.trivia',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("❓ *Trivia:* What is the capital of France?\n\n_Answer: Paris_");
    } catch (error) {
      console.error(`Error in trivia command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
