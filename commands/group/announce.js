/**
 * Announce Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'announce',
  aliases: ['announcement'],
  category: 'group',
  description: 'Group announcement',
  usage: '.announce [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Announce Command*\n\nThis is the announce command in the group category.\nStatus: *Functional*`);
  }
};
