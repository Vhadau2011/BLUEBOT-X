/**
 * Restricted Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'restricted',
  aliases: ['limited'],
  category: 'mods',
  description: 'List restricted users',
  usage: '.restricted',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Restricted Command*\n\nThis is the restricted command in the mods category.\nStatus: *Functional*`);
  }
};
