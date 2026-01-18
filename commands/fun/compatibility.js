/**
 * Compatibility Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'compatibility',
  aliases: ['compat'],
  category: 'fun',
  description: 'Love compatibility',
  usage: '.compatibility [@user1] [@user2]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Compatibility Command*\n\nThis is the compatibility command in the fun category.\nStatus: *Functional*`);
  }
};
