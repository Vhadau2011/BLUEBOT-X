/**
 * Lick Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'lick',
  aliases: ['lickme'],
  category: 'fun',
  description: 'Lick someone',
  usage: '.lick [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("👅 *Lick!* Gross.");
    } catch (error) {
      console.error(`Error in lick command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
