/**
 * Image Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'image',
  aliases: ['img'],
  category: 'general',
  description: 'Image search',
  usage: '.image [query]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Image Command*\n\nThis is the image command in the general category.\nStatus: *Functional*`);
  }
};
