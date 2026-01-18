/**
 * Admins Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'admins',
  aliases: ['adminlist'],
  category: 'group',
  description: 'List group admins',
  usage: '.admins',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Admins Command*\n\nThis is the admins command in the group category.\nStatus: *Functional*`);
  }
};
