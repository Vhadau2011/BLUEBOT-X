/**
 * Profile Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'profile',
  aliases: ['myprofile'],
  category: 'general',
  description: 'Your profile info',
  usage: '.profile',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply(`👤 *Profile:* @${sender.split("@")[0]}`, { mentions: [sender] });
    } catch (error) {
      console.error(`Error in profile command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
