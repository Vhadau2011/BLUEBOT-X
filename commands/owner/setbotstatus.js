/**
 * Setbotstatus Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setbotstatus',
  aliases: ['botstatus'],
  category: 'owner',
  description: 'Set bot status',
  usage: '.setbotstatus [status]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); if (!args[0]) return reply("❌ Provide status!"); await sock.updateProfileStatus(args.join(" ")); await reply("✅ *Status updated!*");
    } catch (error) {
      console.error(`Error in setbotstatus command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
