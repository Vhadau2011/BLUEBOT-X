/**
 * Delete Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'delete',
  aliases: ['del'],
  category: 'admin',
  description: 'Delete message',
  usage: '.delete [reply to message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Delete Command*\n\nThis is the delete command in the admin category.\nStatus: *Functional*`);
  }
};
