/**
 * Bite Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'bite',
  aliases: ['biteme'],
  category: 'fun',
  description: 'Bite someone',
  usage: '.bite [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🦷 *Chomp!* Ouch.");
    } catch (error) {
      console.error(`Error in bite command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
