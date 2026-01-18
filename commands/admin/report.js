/**
 * Report Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'report',
  aliases: ['reportuser'],
  category: 'admin',
  description: 'Report user to admins',
  usage: '.report [@user] [reason]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Report Command*\n\nThis is the report command in the admin category.\nStatus: *Functional*`);
  }
};
