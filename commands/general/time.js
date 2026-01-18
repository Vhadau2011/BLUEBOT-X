/**
 * Time Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'time',
  aliases: ['currenttime'],
  category: 'general',
  description: 'Current time',
  usage: '.time [timezone]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply(`🕒 *Time:* ${new Date().toLocaleString()}`);
    } catch (error) {
      console.error(`Error in time command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
