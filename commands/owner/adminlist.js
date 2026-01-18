/**
 * Adminlist Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'adminlist',
  aliases: ['admins'],
  category: 'owner',
  description: 'List bot admins',
  usage: '.adminlist',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply(`⚡ *Bot Admins:*\n${global.admins.join("\n") || "None"}`);
    } catch (error) {
      console.error(`Error in adminlist command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
