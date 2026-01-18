/**
 * Lockdown Command
 * Category: Mods
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'lockdown',
  aliases: ['ld'],
  category: 'mods',
  description: 'Lockdown group',
  usage: '.lockdown',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isMod && !isOwner) return reply("❌ Mods only!"); await reply("🔒 *Lockdown enabled!*");
    } catch (error) {
      console.error(`Error in lockdown command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
