/**
 * Npm Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'npm',
  aliases: ['npmpackage'],
  category: 'general',
  description: 'NPM package info',
  usage: '.npm [package]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Provide package!"); try { const res = await axios.get(`https://registry.npmjs.org/${args[0]}`); await reply(`📦 *${res.data.name}*\n✨ v${res.data["dist-tags"].latest}\n📝 ${res.data.description}`); } catch { reply("❌ Not found!"); }
    } catch (error) {
      console.error(`Error in npm command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
