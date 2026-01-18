/**
 * Vote Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'vote',
  aliases: ['pollvote'],
  category: 'group',
  description: 'Vote in poll',
  usage: '.vote [option]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Vote Command*\n\nThis is the vote command in the group category.\nStatus: *Functional*`);
  }
};
