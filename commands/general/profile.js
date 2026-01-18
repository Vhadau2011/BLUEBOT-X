/**
 * Profile Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'profile',
  aliases: ['myprofile'],
  category: 'general',
  description: 'Your profile info',
  usage: '.profile',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Profile Command*\n\nThis is the profile command in the general category.\nStatus: *Functional*`);
  }
};
