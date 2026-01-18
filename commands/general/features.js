/**
 * Features Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'features',
  aliases: ['feat'],
  category: 'general',
  description: 'List bot features',
  usage: '.features',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("✨ *Features:* 209+ Commands, Pairing Code, Admin Tools.");
    } catch (error) {
      console.error(`Error in features command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
