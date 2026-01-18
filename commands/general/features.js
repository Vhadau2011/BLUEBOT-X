/**
 * Features Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'features',
  aliases: ['feat'],
  category: 'general',
  description: 'List bot features',
  usage: '.features',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Features Command*\n\nThis is the features command in the general category.\nStatus: *Functional*`);
  }
};
