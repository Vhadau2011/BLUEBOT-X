/**
 * Setprefix Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setprefix',
  aliases: ['changeprefix'],
  category: 'admin',
  description: 'Change bot prefix',
  usage: '.setprefix [prefix]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!isOwner) return reply('❌ Owner only!');
    if (!args[0]) return reply('❌ Provide a prefix!');
    config.PREFIX = args[0];
    await reply(`✅ *Prefix changed to:* ${args[0]}`);
  }
};
