/**
 * Dare Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'dare',
  aliases: ['dareq'],
  category: 'fun',
  description: 'Dare challenge',
  usage: '.dare',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const d = ["Send a voice note singing.", "Change your DP for 1 hour.", "Text your crush."]; await reply(`🔥 *Dare:* ${d[Math.floor(Math.random()*d.length)]}`);
    } catch (error) {
      console.error(`Error in dare command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
