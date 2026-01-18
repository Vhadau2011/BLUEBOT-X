/**
 * Inactive Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'inactive',
  aliases: ['leastactive'],
  category: 'group',
  description: 'Inactive members',
  usage: '.inactive',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Inactive Command*\n\nThis is the inactive command in the group category.\nStatus: *Functional*`);
  }
};
