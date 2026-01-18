/**
 * Server Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'server',
  aliases: ['serverinfo'],
  category: 'general',
  description: 'Server information',
  usage: '.server',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🖥️ *Server:* Ubuntu 22.04, 8GB RAM, Active.");
    } catch (error) {
      console.error(`Error in server command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
