/**
 * Unlockdown Command
 * Category: Mods
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unlockdown',
  aliases: ['uld'],
  category: 'mods',
  description: 'Remove lockdown',
  usage: '.unlockdown',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isMod && !isOwner) return reply("❌ Mods only!"); await reply("🔓 *Lockdown disabled!*");
    } catch (error) {
      console.error(`Error in unlockdown command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
