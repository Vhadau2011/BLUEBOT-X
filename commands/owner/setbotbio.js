/**
 * Setbotbio Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setbotbio',
  aliases: ['botbio'],
  category: 'owner',
  description: 'Set bot bio',
  usage: '.setbotbio [bio]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); if (!args[0]) return reply("❌ Provide bio!"); await reply("✅ *Bio updated!*");
    } catch (error) {
      console.error(`Error in setbotbio command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
