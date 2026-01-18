/**
 * Removeadmin Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'removeadmin',
  aliases: ['deladmin'],
  category: 'owner',
  description: 'Remove bot admin',
  usage: '.removeadmin [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); if (!args[0]) return reply("❌ Provide number!"); global.admins = global.admins.filter(a => a !== args[0].replace(/\\D/g, "")); await reply(`✅ *Admin removed:* ${args[0]}`);
    } catch (error) {
      console.error(`Error in removeadmin command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
