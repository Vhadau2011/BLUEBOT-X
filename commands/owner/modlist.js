/**
 * Modlist Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'modlist',
  aliases: ['mods'],
  category: 'owner',
  description: 'List moderators',
  usage: '.modlist',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply(`🛡️ *Bot Mods:*\n${global.mods.join("\n") || "None"}`);
    } catch (error) {
      console.error(`Error in modlist command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
