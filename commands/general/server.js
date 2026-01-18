/**
 * Server Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'server',
  aliases: ['serverinfo'],
  category: 'general',
  description: 'Server information',
  usage: '.server',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`🖥️ *Server Info*\n\n💻 OS: Ubuntu 22.04\n🧠 RAM: 8GB\n💾 Disk: 160GB\n🌍 Region: South Africa`);
  }
};
