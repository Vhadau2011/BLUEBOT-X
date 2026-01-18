/**
 * Wyr Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'wyr',
  aliases: ['wouldyourather'],
  category: 'fun',
  description: 'Would you rather',
  usage: '.wyr',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🤔 *Would you rather:*\n1. Fly\n2. Be invisible");
    } catch (error) {
      console.error(`Error in wyr command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
