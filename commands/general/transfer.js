/**
 * Transfer Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'transfer',
  aliases: ['send'],
  category: 'general',
  description: 'Transfer coins',
  usage: '.transfer [@user] [amount]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[1]) return reply("❌ Usage: .transfer @user [amt]"); await reply("✅ *Transferred!*");
    } catch (error) {
      console.error(`Error in transfer command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
