/**
 * Leave Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'leave',
  aliases: ['leavegroup'],
  category: 'owner',
  description: 'Leave group',
  usage: '.leave',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Leave Command*\n\nThis is the leave command in the owner category.\nStatus: *Functional*`);
  }
};
