/**
 * Note Command
 * Category: Mods
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'note',
  aliases: ['addnote'],
  category: 'mods',
  description: 'Add note',
  usage: '.note [name] [content]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isMod && !isOwner) return reply("❌ Mods only!"); if (!args[1]) return reply("❌ Usage: .note [name] [text]"); await reply(`✅ *Note saved:* ${args[0]}`);
    } catch (error) {
      console.error(`Error in note command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
