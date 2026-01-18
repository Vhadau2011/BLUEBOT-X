/**
 * Active Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'active',
  aliases: ['mostactive'],
  category: 'group',
  description: 'Most active members',
  usage: '.active',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); await reply("🔥 *Most Active:* @mudau_t", { mentions: [config.OWNER_NUMBER + "@s.whatsapp.net"] });
    } catch (error) {
      console.error(`Error in active command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
