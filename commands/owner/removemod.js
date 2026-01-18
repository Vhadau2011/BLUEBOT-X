/**
 * Removemod Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'removemod',
  aliases: ['delmod'],
  category: 'owner',
  description: 'Remove moderator',
  usage: '.removemod [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); if (!args[0]) return reply("❌ Provide number!"); global.mods = global.mods.filter(m => m !== args[0].replace(/\\D/g, "")); await reply(`✅ *Mod removed:* ${args[0]}`);
    } catch (error) {
      console.error(`Error in removemod command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
