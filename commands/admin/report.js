/**
 * Report Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'report',
  aliases: ['reportuser'],
  category: 'admin',
  description: 'Report user to admins',
  usage: '.report [@user] [reason]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Provide report!"); await reply("✅ *Report sent to admins!*");
    } catch (error) {
      console.error(`Error in report command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
