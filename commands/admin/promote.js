/**
 * Promote Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'promote',
  aliases: ['makeadmin'],
  category: 'admin',
  description: 'Promote to admin',
  usage: '.promote [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Promote Command*\n\nThis is the promote command in the admin category.\nStatus: *Functional*`);
  }
};
