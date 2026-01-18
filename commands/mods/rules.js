/**
 * Rules Command
 * Category: Mods
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'rules',
  aliases: ['grouprules'],
  category: 'mods',
  description: 'View group rules',
  usage: '.rules',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("📜 *Group Rules:*\n1. Be respectful\n2. No spam");
    } catch (error) {
      console.error(`Error in rules command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
