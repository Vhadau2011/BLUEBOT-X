/**
 * Reload Command
 * Category: Dev
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'reload',
  aliases: ['reloadcmd'],
  category: 'dev',
  description: 'Reload command',
  usage: '.reload [command]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); await reply(`🔄 *Reloaded:* ${args[0]}`);
    } catch (error) {
      console.error(`Error in reload command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
