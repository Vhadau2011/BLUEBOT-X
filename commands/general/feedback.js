/**
 * Feedback Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'feedback',
  aliases: ['suggest'],
  category: 'general',
  description: 'Send feedback',
  usage: '.feedback [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Provide feedback!"); await reply("✅ *Feedback sent!*");
    } catch (error) {
      console.error(`Error in feedback command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
