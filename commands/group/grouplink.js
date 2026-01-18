/**
 * Grouplink Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'grouplink',
  aliases: ['gclink'],
  category: 'group',
  description: 'Get group link',
  usage: '.grouplink',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); if (!isBotGroupAdmin) return reply("❌ I need admin!"); await reply(`🔗 *Link:* https://chat.whatsapp.com/${await sock.groupInviteCode(from)}`);
    } catch (error) {
      console.error(`Error in grouplink command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
