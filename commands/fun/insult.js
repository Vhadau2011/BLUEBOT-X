/**
 * Insult Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'insult',
  aliases: ['mock'],
  category: 'fun',
  description: 'Insult generator',
  usage: '.insult',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const i = ["You are a gray sprinkle on a rainbow cupcake.", "You are the human equivalent of a participation award."]; await reply(`💀 *Insult:* ${i[Math.floor(Math.random()*i.length)]}`);
    } catch (error) {
      console.error(`Error in insult command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
