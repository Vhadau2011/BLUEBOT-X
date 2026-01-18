/**
 * Admins Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'admins',
  aliases: ['adminlist'],
  category: 'group',
  description: 'List group admins',
  usage: '.admins',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); const m = await sock.groupMetadata(from); const a = m.participants.filter(p => p.admin).map(p => `@${p.id.split("@")[0]}`); await reply(`⚡ *Admins:*\n${a.join("\n")}`, { mentions: m.participants.filter(p => p.admin).map(p => p.id) });
    } catch (error) {
      console.error(`Error in admins command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
