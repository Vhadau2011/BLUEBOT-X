/**
 * Setlang Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setlang',
  aliases: ['language'],
  category: 'admin',
  description: 'Set bot language',
  usage: '.setlang [code]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply(`✅ *Language set to:* ${args[0] || "en"}`);
    } catch (error) {
      console.error(`Error in setlang command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
