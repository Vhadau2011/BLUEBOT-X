/**
 * Broadcastgc Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'broadcastgc',
  aliases: ['bcgc'],
  category: 'owner',
  description: 'Broadcast to groups',
  usage: '.broadcastgc [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); if (!args[0]) return reply("❌ Provide message!"); await reply("📢 *Broadcasting to all groups...*");
    } catch (error) {
      console.error(`Error in broadcastgc command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
