/**
 * Pat Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'pat',
  aliases: ['headpat'],
  category: 'fun',
  description: 'Pat someone',
  usage: '.pat [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("👋 *Pat pat!* Good job.");
    } catch (error) {
      console.error(`Error in pat command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
