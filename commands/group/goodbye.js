/**
 * Goodbye Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'goodbye',
  aliases: ['setgoodbye'],
  category: 'group',
  description: 'Toggle goodbye',
  usage: '.goodbye [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); await reply(`✅ *Goodbye:* ${args[0] || "on"}`);
    } catch (error) {
      console.error(`Error in goodbye command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
