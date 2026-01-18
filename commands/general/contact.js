/**
 * Contact Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'contact',
  aliases: ['contactowner'],
  category: 'general',
  description: 'Contact bot owner',
  usage: '.contact',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("👨‍💻 *Dev:* mudau_t\n📱 +27747815326");
    } catch (error) {
      console.error(`Error in contact command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
