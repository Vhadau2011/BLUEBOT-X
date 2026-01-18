/**
 * Google Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'google',
  aliases: ['search'],
  category: 'general',
  description: 'Google search',
  usage: '.google [query]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ What to search?"); await reply(`🔍 *Search:* https://www.google.com/search?q=${encodeURIComponent(args.join(" "))}`);
    } catch (error) {
      console.error(`Error in google command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
