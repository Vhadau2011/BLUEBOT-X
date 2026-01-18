/**
 * Addmod Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'addmod',
  aliases: ['makemod'],
  category: 'owner',
  description: 'Add moderator',
  usage: '.addmod [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); if (!args[0]) return reply("❌ Provide number!"); global.mods.push(args[0].replace(/\\D/g, "")); await reply(`✅ *Mod added:* ${args[0]}`);
    } catch (error) {
      console.error(`Error in addmod command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
