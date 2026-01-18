/**
 * Setmode Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setmode',
  aliases: ['mode'],
  category: 'owner',
  description: 'Set bot mode',
  usage: '.setmode [public/private]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); if (!args[0]) return reply("❌ Use public/private!"); config.MODE = args[0].toLowerCase(); await reply(`✅ *Mode set to:* ${config.MODE}`);
    } catch (error) {
      console.error(`Error in setmode command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
