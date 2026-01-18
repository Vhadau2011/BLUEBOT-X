/**
 * Runtime Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'runtime',
  aliases: ['uptime'],
  category: 'general',
  description: 'Show bot runtime',
  usage: '.runtime',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const u = process.uptime(); await reply(`⏱️ *Runtime:* ${Math.floor(u/3600)}h ${Math.floor((u%3600)/60)}m ${Math.floor(u%60)}s`);
    } catch (error) {
      console.error(`Error in runtime command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
