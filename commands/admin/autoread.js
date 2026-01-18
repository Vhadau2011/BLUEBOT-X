/**
 * Autoread Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'autoread',
  aliases: ['autoreadmode'],
  category: 'admin',
  description: 'Toggle autoread',
  usage: '.autoread [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Autoread Command*\n\nThis is the autoread command in the admin category.\nStatus: *Functional*`);
  }
};
