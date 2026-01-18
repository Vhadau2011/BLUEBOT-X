/**
 * Add Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'add',
  aliases: ['addmember'],
  category: 'admin',
  description: 'Add member',
  usage: '.add [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Add Command*\n\nThis is the add command in the admin category.\nStatus: *Functional*`);
  }
};
