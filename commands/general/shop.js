/**
 * Shop Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'shop',
  aliases: ['store'],
  category: 'general',
  description: 'Bot shop',
  usage: '.shop',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🛒 *Shop:*\n1. Premium - 5k\n2. Tag - 2k");
    } catch (error) {
      console.error(`Error in shop command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
