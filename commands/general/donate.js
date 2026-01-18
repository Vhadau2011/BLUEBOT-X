/**
 * Donate Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'donate',
  aliases: ['contribution'],
  category: 'general',
  description: 'Donation information',
  usage: '.donate',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("☕ *Donate:* Support development via PayPal.");
    } catch (error) {
      console.error(`Error in donate command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
