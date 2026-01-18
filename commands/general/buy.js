/**
 * Buy Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'buy',
  aliases: ['purchase'],
  category: 'general',
  description: 'Buy items',
  usage: '.buy [item]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ What to buy?"); await reply(`✅ *Bought:* ${args[0]}`);
    } catch (error) {
      console.error(`Error in buy command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
