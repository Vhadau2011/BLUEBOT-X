/**
 * About Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'about',
  aliases: ['botinfo'],
  category: 'general',
  description: 'About the bot',
  usage: '.about',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🤖 *BLUEBOT-X* is a powerful WhatsApp bot developed by mudau_t.");
    } catch (error) {
      console.error(`Error in about command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
