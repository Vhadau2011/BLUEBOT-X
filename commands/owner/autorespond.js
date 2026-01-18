/**
 * Autorespond Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'autorespond',
  aliases: ['autoresp'],
  category: 'owner',
  description: 'Set auto response',
  usage: '.autorespond [trigger] [response]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply("✅ *Auto-respond set!*");
    } catch (error) {
      console.error(`Error in autorespond command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
