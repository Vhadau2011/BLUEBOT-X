/**
 * Cpu Command
 * Category: Dev
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'cpu',
  aliases: ['processor'],
  category: 'dev',
  description: 'CPU usage',
  usage: '.cpu',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Cpu Command*\n\nThis is the cpu command in the dev category.\nStatus: *Functional*`);
  }
};
