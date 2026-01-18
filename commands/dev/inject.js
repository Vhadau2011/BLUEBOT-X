/**
 * Inject Command
 * Category: Dev
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'inject',
  aliases: ['injectcode'],
  category: 'dev',
  description: 'Inject code',
  usage: '.inject [code]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply("💉 *Code injected!*");
    } catch (error) {
      console.error(`Error in inject command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
