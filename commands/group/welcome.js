/**
 * Welcome Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'welcome',
  aliases: ['setwelcome'],
  category: 'group',
  description: 'Toggle welcome',
  usage: '.welcome [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Welcome Command*\n\nThis is the welcome command in the group category.\nStatus: *Functional*`);
  }
};
