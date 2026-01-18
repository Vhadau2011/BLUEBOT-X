/**
 * Cpu Command
 * Category: Dev
 * Developer: mudau_t
 * Modification: NOT ALLOWED
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
    try {
await reply(`💻 *CPU:* ${JSON.stringify(process.cpuUsage())}`);
    } catch (error) {
      console.error(`Error in cpu command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
