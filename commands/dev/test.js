/**
 * Test Command
 * Category: Dev
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'test',
  aliases: ['testing'],
  category: 'dev',
  description: 'Test command',
  usage: '.test',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("✅ *Test successful!* Bot is working perfectly.");
    } catch (error) {
      console.error(`Error in test command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
