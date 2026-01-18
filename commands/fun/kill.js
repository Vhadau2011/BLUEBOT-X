/**
 * Kill Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'kill',
  aliases: ['murder'],
  category: 'fun',
  description: 'Fake kill',
  usage: '.kill [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("💀 *Target eliminated.*");
    } catch (error) {
      console.error(`Error in kill command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
