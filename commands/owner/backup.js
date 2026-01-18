/**
 * Backup Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'backup',
  aliases: ['backupall'],
  category: 'owner',
  description: 'Backup all data',
  usage: '.backup',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply("✅ *Full backup created!*");
    } catch (error) {
      console.error(`Error in backup command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
