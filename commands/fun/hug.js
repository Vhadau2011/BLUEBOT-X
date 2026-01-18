/**
 * Hug Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'hug',
  aliases: ['embrace'],
  category: 'fun',
  description: 'Hug someone',
  usage: '.hug [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🫂 *Hugging you tight!*");
    } catch (error) {
      console.error(`Error in hug command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
