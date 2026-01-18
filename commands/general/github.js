/**
 * Github Command
 * Category: General
 * Developer: mudau_t
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

    if (!args[0]) return reply('❌ Provide a GitHub username!');
    try {
        const res = await axios.get(`https://api.github.com/users/${args[0]}`);
        const { login, bio, public_repos, followers, following, html_url, avatar_url } = res.data;
        await sock.sendMessage(from, { image: { url: avatar_url }, caption: `🐙 *GitHub: ${login}*\n\n📝 Bio: ${bio || 'N/A'}\n📦 Repos: ${public_repos}\n👥 Followers: ${followers}\n👤 Following: ${following}\n🔗 ${html_url}` }, { quoted: msg });
    } catch { reply('❌ User not found!'); }
  }
};
