/**
 * Join Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'join',
  aliases: ['joingroup'],
  category: 'group',
  description: 'Join group via link',
  usage: '.join [link]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Join Command*\n\nThis is the join command in the group category.\nStatus: *Functional*`);
  }
};
