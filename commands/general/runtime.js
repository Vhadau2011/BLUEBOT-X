/**
 * Runtime Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'runtime',
  aliases: ['uptime'],
  category: 'general',
  description: 'Show bot runtime',
  usage: '.runtime',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    const uptime = process.uptime();
    const d = Math.floor(uptime / 86400);
    const h = Math.floor((uptime % 86400) / 3600);
    const m = Math.floor((uptime % 3600) / 60);
    const s = Math.floor(uptime % 60);
    await reply(`⏱️ *Bot Runtime:* ${d}d ${h}h ${m}m ${s}s`);
  }
};
