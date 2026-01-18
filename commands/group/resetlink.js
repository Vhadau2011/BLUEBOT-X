/**
 * Resetlink Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'resetlink',
  aliases: ['revoke'],
  category: 'group',
  description: 'Reset group link',
  usage: '.resetlink',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); if (!isBotGroupAdmin) return reply("❌ I need admin!"); await sock.groupRevokeInvite(from); await reply("✅ Link reset!");
    } catch (error) {
      console.error(`Error in resetlink command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
