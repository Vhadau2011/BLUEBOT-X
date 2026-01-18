/**
 * Calculator Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'calculator',
  aliases: ['calc'],
  category: 'general',
  description: 'Calculate math',
  usage: '.calculator [expression]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Provide math!"); try { await reply(`🔢 *Result:* ${eval(args.join("").replace(/[^-()\\d/*+.]/g, ""))}`); } catch { reply("❌ Error!"); }
    } catch (error) {
      console.error(`Error in calculator command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
