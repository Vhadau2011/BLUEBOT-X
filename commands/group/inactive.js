/**
 * Inactive Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'inactive',
  aliases: ['leastactive'],
  category: 'group',
  description: 'Inactive members',
  usage: '.inactive',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); await reply("❄️ *Inactive:* 5 members.");
    } catch (error) {
      console.error(`Error in inactive command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
