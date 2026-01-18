/**
 * Welcome Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'welcome',
  aliases: ['setwelcome'],
  category: 'group',
  description: 'Toggle welcome',
  usage: '.welcome [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); await reply(`✅ *Welcome:* ${args[0] || "on"}`);
    } catch (error) {
      console.error(`Error in welcome command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
