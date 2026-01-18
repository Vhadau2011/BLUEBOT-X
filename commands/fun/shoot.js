/**
 * Shoot Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'shoot',
  aliases: ['shootme'],
  category: 'fun',
  description: 'Shoot someone',
  usage: '.shoot [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🔫 *Bang!* Gotcha.");
    } catch (error) {
      console.error(`Error in shoot command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
