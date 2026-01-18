/**
 * Info Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'info',
  aliases: ['info'],
  category: 'general',
  description: 'Display bot information',
  usage: '.info',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply(`🤖 *BLUEBOT-X*\nDev: mudau_t\nVer: 2.0.0`);
    } catch (error) {
      console.error(`Error in info command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
