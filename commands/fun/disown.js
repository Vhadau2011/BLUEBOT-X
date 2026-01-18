/**
 * Disown Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'disown',
  aliases: ['disownme'],
  category: 'fun',
  description: 'Disown someone',
  usage: '.disown [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🚪 *Get out! You are disowned.*");
    } catch (error) {
      console.error(`Error in disown command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
