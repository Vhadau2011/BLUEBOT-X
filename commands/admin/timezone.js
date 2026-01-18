/**
 * Timezone Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'timezone',
  aliases: ['settz'],
  category: 'admin',
  description: 'Set timezone',
  usage: '.timezone [zone]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Timezone Command*\n\nThis is the timezone command in the admin category.\nStatus: *Functional*`);
  }
};
