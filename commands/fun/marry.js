/**
 * Marry Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'marry',
  aliases: ['propose'],
  category: 'fun',
  description: 'Marry someone',
  usage: '.marry [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
await reply("💍 *Will you marry me?*");
    } catch (error) {
      console.error(`Error in marry command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
