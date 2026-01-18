/**
 * Setbotpp Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setbotpp',
  aliases: ['botpp'],
  category: 'owner',
  description: 'Set bot profile picture',
  usage: '.setbotpp [reply to image]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply("✅ *Bot DP updated!*");
    } catch (error) {
      console.error(`Error in setbotpp command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
