/**
 * Version Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'version',
  aliases: ['ver'],
  category: 'general',
  description: 'Show bot version',
  usage: '.version',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("📌 *Version:* 2.0.0 (Stable)");
    } catch (error) {
      console.error(`Error in version command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
