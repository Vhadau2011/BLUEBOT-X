/**
 * Npm Command
 * Category: General
 * Developer: mudau_t
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

    if (!args[0]) return reply('❌ Provide a package name!');
    try {
        const res = await axios.get(`https://registry.npmjs.org/${args[0]}`);
        const latest = res.data['dist-tags'].latest;
        const data = res.data.versions[latest];
        await reply(`📦 *NPM: ${data.name}*\n\n✨ Version: ${latest}\n📝 Desc: ${data.description}\n🔗 https://www.npmjs.com/package/${data.name}`);
    } catch { reply('❌ Package not found!'); }
  }
};
