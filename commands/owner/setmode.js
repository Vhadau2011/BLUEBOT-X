/**
 * Setmode Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setmode',
  aliases: ['mode'],
  category: 'owner',
  description: 'Set bot mode',
  usage: '.setmode [public/private]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!isOwner) return reply('❌ Owner only!');
    if (!args[0]) return reply('❌ Use public or private!');
    config.MODE = args[0].toLowerCase();
    await reply(`✅ *Bot mode set to:* ${config.MODE}`);
  }
};
