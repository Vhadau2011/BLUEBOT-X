/**
 * Divorce Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'divorce',
  aliases: ['breakup'],
  category: 'fun',
  description: 'Divorce someone',
  usage: '.divorce [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("💔 *It is over. I want a divorce.*");
    } catch (error) {
      console.error(`Error in divorce command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
