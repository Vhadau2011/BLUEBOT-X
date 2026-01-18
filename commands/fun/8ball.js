/**
 * 8ball Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: '8ball',
  aliases: ['eightball'],
  category: 'fun',
  description: 'Magic 8 ball',
  usage: '.8ball [question]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const a = ["Yes", "No", "Maybe", "Ask again", "Never"]; await reply(`🎱 *8-Ball:* ${a[Math.floor(Math.random()*a.length)]}`);
    } catch (error) {
      console.error(`Error in 8ball command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
