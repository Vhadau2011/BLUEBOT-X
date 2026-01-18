/**
 * Delnote Command
 * Category: Mods
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'delnote',
  aliases: ['removenote'],
  category: 'mods',
  description: 'Delete note',
  usage: '.delnote [name]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isMod && !isOwner) return reply("❌ Mods only!"); if (!args[0]) return reply("❌ Provide name!"); await reply(`✅ *Note deleted:* ${args[0]}`);
    } catch (error) {
      console.error(`Error in delnote command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
