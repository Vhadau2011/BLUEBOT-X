/**
 * Compatibility Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'compatibility',
  aliases: ['compat'],
  category: 'fun',
  description: 'Love compatibility',
  usage: '.compatibility [@user1] [@user2]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply(`💘 *Compatibility:* 85%`);
    } catch (error) {
      console.error(`Error in compatibility command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
