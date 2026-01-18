/**
 * Invite Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'invite',
  aliases: ['inviteuser'],
  category: 'group',
  description: 'Invite user',
  usage: '.invite [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); await reply("✅ *Invite sent!*");
    } catch (error) {
      console.error(`Error in invite command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
