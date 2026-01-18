/**
 * Github Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'github',
  aliases: ['ghuser'],
  category: 'general',
  description: 'GitHub user info',
  usage: '.github [username]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Provide username!"); try { const res = await axios.get(`https://api.github.com/users/${args[0]}`); await sock.sendMessage(from, { image: { url: res.data.avatar_url }, caption: `🐙 *User:* ${res.data.login}\n📝 Bio: ${res.data.bio || "N/A"}\n📦 Repos: ${res.data.public_repos}` }); } catch { reply("❌ Not found!"); }
    } catch (error) {
      console.error(`Error in github command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
