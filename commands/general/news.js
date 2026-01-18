/**
 * News Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'news',
  aliases: ['latestnews'],
  category: 'general',
  description: 'Latest news',
  usage: '.news [category]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("✅ *News command is working!*");
    } catch (error) {
      console.error(`Error in news command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
