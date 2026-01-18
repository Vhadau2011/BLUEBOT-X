/**
 * Hidetag Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'hidetag',
  aliases: ['hidden'],
  category: 'group',
  description: 'Hidden tag',
  usage: '.hidetag [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); const meta = await sock.groupMetadata(from); await sock.sendMessage(from, { text: args.join(" ") || "Hello!", mentions: meta.participants.map(p => p.id) });
    } catch (error) {
      console.error(`Error in hidetag command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
