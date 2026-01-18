/**
 * Translate Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'translate',
  aliases: ['trans'],
  category: 'general',
  description: 'Translate text',
  usage: '.translate [lang] [text]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (args.length < 2) return reply("❌ Usage: .translate [lang] [text]"); await reply(`🌐 *Translate:* https://translate.google.com/?sl=auto&tl=${args[0]}&text=${encodeURIComponent(args.slice(1).join(" "))}`);
    } catch (error) {
      console.error(`Error in translate command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
