/**
 * Setwelcome Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setwelcome',
  aliases: ['customwelcome'],
  category: 'admin',
  description: 'Set welcome message',
  usage: '.setwelcome [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Setwelcome Command*\n\nThis is the setwelcome command in the admin category.\nStatus: *Functional*`);
  }
};
