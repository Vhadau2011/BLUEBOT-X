/**
 * Restricted Command
 * Category: Mods
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'restricted',
  aliases: ['limited'],
  category: 'mods',
  description: 'List restricted users',
  usage: '.restricted',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🚫 *Restricted Users:* None");
    } catch (error) {
      console.error(`Error in restricted command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
