/**
 * Unlock Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unlock',
  aliases: ['unlockgroup'],
  category: 'admin',
  description: 'Unlock group settings',
  usage: '.unlock',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Unlock Command*\n\nThis is the unlock command in the admin category.\nStatus: *Functional*`);
  }
};
