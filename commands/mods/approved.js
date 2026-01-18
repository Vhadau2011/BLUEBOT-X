/**
 * Approved Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'approved',
  aliases: ['whitelist'],
  category: 'mods',
  description: 'List approved users',
  usage: '.approved',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Approved Command*\n\nThis is the approved command in the mods category.\nStatus: *Functional*`);
  }
};
