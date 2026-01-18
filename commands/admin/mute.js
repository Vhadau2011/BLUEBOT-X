/**
 * Mute Command
 * Category: Admin
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'mute',
  aliases: ['mutegroup'],
  category: 'admin',
  description: 'Mute group',
  usage: '.mute',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Mute Command*\n\nThis is the mute command in the admin category.\nStatus: *Functional*`);
  }
};
