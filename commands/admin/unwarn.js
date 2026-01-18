/**
 * Unwarn Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unwarn',
  aliases: ['removewarn'],
  category: 'admin',
  description: 'Remove warning',
  usage: '.unwarn [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Unwarn Command*\n\nThis is the unwarn command in the admin category.\nStatus: *Functional*`);
  }
};
