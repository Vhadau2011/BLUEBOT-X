/**
 * Addadmin Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'addadmin',
  aliases: ['makeadmin'],
  category: 'owner',
  description: 'Add bot admin',
  usage: '.addadmin [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); if (!args[0]) return reply("❌ Provide number!"); global.admins.push(args[0].replace(/\\D/g, "")); await reply(`✅ *Admin added:* ${args[0]}`);
    } catch (error) {
      console.error(`Error in addadmin command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
