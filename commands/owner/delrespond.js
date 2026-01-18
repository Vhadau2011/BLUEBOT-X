/**
 * Delrespond Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'delrespond',
  aliases: ['delresp'],
  category: 'owner',
  description: 'Delete auto response',
  usage: '.delrespond [trigger]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply("✅ *Auto-respond deleted!*");
    } catch (error) {
      console.error(`Error in delrespond command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
