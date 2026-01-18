/**
 * Poke Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'poke',
  aliases: ['pokeme'],
  category: 'fun',
  description: 'Poke someone',
  usage: '.poke [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("👉 *Poke!* Hey you.");
    } catch (error) {
      console.error(`Error in poke command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
