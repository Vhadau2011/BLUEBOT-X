/**
 * Kick Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'kick',
  aliases: ['kickme'],
  category: 'fun',
  description: 'Kick someone',
  usage: '.kick [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("🦵 *Kick!* Oof.");
    } catch (error) {
      console.error(`Error in kick command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
