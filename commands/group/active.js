/**
 * Active Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'active',
  aliases: ['mostactive'],
  category: 'group',
  description: 'Most active members',
  usage: '.active',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Active Command*\n\nThis is the active command in the group category.\nStatus: *Functional*`);
  }
};
