/**
 * Dice Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'dice',
  aliases: ['roll'],
  category: 'fun',
  description: 'Roll dice',
  usage: '.dice',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply(`🎲 *Dice:* ${Math.floor(Math.random()*6)+1}`);
    } catch (error) {
      console.error(`Error in dice command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
