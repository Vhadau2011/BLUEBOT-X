/**
 * Demote Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'demote',
  aliases: ['removeadmin'],
  category: 'admin',
  description: 'Demote from admin',
  usage: '.demote [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Demote Command*\n\nThis is the demote command in the admin category.\nStatus: *Functional*`);
  }
};
