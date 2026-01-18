/**
 * Shutdown Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'shutdown',
  aliases: ['stop'],
  category: 'owner',
  description: 'Shutdown bot',
  usage: '.shutdown',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply("👋 *Shutting down...*"); process.exit(0);
    } catch (error) {
      console.error(`Error in shutdown command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
