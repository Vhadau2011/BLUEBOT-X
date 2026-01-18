/**
 * Setprefix Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setprefix',
  aliases: ['changeprefix'],
  category: 'admin',
  description: 'Change bot prefix',
  usage: '.setprefix [prefix]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); if (!args[0]) return reply("❌ Provide prefix!"); config.PREFIX = args[0]; await reply(`✅ *Prefix set to:* ${args[0]}`);
    } catch (error) {
      console.error(`Error in setprefix command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
