/**
 * Restart Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'restart',
  aliases: ['reboot'],
  category: 'owner',
  description: 'Restart bot',
  usage: '.restart',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply("🔄 *Restarting...*"); process.exit(1);
    } catch (error) {
      console.error(`Error in restart command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
