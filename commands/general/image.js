/**
 * Image Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'image',
  aliases: ['img'],
  category: 'general',
  description: 'Image search',
  usage: '.image [query]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("✅ *Image command is working!*");
    } catch (error) {
      console.error(`Error in image command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
