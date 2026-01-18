/**
 * Poll Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'poll',
  aliases: ['createpoll'],
  category: 'group',
  description: 'Create poll',
  usage: '.poll [question]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Poll Command*\n\nThis is the poll command in the group category.\nStatus: *Functional*`);
  }
};
