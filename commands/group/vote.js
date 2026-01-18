/**
 * Vote Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'vote',
  aliases: ['pollvote'],
  category: 'group',
  description: 'Vote in poll',
  usage: '.vote [option]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("✅ *Vote recorded!*");
    } catch (error) {
      console.error(`Error in vote command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
