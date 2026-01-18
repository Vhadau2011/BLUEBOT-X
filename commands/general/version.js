/**
 * Version Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'version',
  aliases: ['ver'],
  category: 'general',
  description: 'Show bot version',
  usage: '.version',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`📌 *Current Version:* 2.0.0\n🚀 *Status:* Stable`);
  }
};
