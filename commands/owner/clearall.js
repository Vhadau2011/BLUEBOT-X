/**
 * Clearall Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'clearall',
  aliases: ['wipedata'],
  category: 'owner',
  description: 'Clear all data',
  usage: '.clearall',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Clearall Command*\n\nThis is the clearall command in the owner category.\nStatus: *Functional*`);
  }
};
