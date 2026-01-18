/**
 * Clear Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'clear',
  aliases: ['purge'],
  category: 'admin',
  description: 'Clear messages',
  usage: '.clear [amount]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!isGroupAdmin && !isOwner) return reply('❌ Admins only!');
    await reply(`🧹 *Clearing ${args[0] || 'all'} messages...*`);
  }
};
