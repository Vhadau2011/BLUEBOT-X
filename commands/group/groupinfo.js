/**
 * Groupinfo Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'groupinfo',
  aliases: ['ginfo'],
  category: 'group',
  description: 'Group information',
  usage: '.groupinfo',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); const m = await sock.groupMetadata(from); await reply(`👥 *Group:* ${m.subject}\n🆔 ID: ${m.id}\n👥 Members: ${m.participants.length}`);
    } catch (error) {
      console.error(`Error in groupinfo command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
