/**
 * Report Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'report',
  aliases: ['reportbug'],
  category: 'general',
  description: 'Report a bug',
  usage: '.report [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Provide bug!"); await reply("✅ *Reported:* Thank you for your feedback.");
    } catch (error) {
      console.error(`Error in report command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
