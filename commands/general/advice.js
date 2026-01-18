/**
 * Advice Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'advice',
  aliases: ['tip'],
  category: 'general',
  description: 'Random advice',
  usage: '.advice',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("✅ *Advice command is working!*");
    } catch (error) {
      console.error(`Error in advice command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
