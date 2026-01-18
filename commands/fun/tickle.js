/**
 * Tickle Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'tickle',
  aliases: ['tickleme'],
  category: 'fun',
  description: 'Tickle someone',
  usage: '.tickle [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🤣 *Tickle tickle!* Stop laughing.");
    } catch (error) {
      console.error(`Error in tickle command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
