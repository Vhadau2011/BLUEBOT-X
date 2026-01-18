/**
 * Memory Command
 * Category: Dev
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'memory',
  aliases: ['ram'],
  category: 'dev',
  description: 'Memory usage',
  usage: '.memory',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Memory Command*\n\nThis is the memory command in the dev category.\nStatus: *Functional*`);
  }
};
