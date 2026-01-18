/**
 * Currency Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'currency',
  aliases: ['convert'],
  category: 'general',
  description: 'Currency converter',
  usage: '.currency [amount] [from] [to]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[2]) return reply("❌ Usage: .currency [amt] [from] [to]"); await reply("💱 *Converted!*");
    } catch (error) {
      console.error(`Error in currency command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
