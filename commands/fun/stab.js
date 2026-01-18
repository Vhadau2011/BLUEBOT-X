/**
 * Stab Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'stab',
  aliases: ['stabme'],
  category: 'fun',
  description: 'Stab someone',
  usage: '.stab [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🔪 *Stab!* Critical hit.");
    } catch (error) {
      console.error(`Error in stab command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
