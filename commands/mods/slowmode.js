/**
 * Slowmode Command
 * Category: Mods
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'slowmode',
  aliases: ['slow'],
  category: 'mods',
  description: 'Toggle slowmode',
  usage: '.slowmode [seconds]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isMod && !isOwner) return reply("❌ Mods only!"); await reply(`⏳ *Slowmode:* ${args[0] || "10s"}`);
    } catch (error) {
      console.error(`Error in slowmode command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
