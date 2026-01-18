/**
 * Reloadall Command
 * Category: Dev
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'reloadall',
  aliases: ['reloadcmds'],
  category: 'dev',
  description: 'Reload all commands',
  usage: '.reloadall',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply("🔄 *All commands reloaded!*");
    } catch (error) {
      console.error(`Error in reloadall command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
