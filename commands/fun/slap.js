/**
 * Slap Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'slap',
  aliases: ['hit'],
  category: 'fun',
  description: 'Slap someone',
  usage: '.slap [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("👋 *Slapped!* That must have hurt.");
    } catch (error) {
      console.error(`Error in slap command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
