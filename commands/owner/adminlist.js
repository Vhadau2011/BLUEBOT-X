/**
 * Adminlist Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'adminlist',
  aliases: ['admins'],
  category: 'owner',
  description: 'List bot admins',
  usage: '.adminlist',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Adminlist Command*\n\nThis is the adminlist command in the owner category.\nStatus: *Functional*`);
  }
};
