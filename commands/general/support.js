/**
 * Support Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'support',
  aliases: ['help'],
  category: 'general',
  description: 'Get support information',
  usage: '.support',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🆘 *Support:* Join our group or contact dev.");
    } catch (error) {
      console.error(`Error in support command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
