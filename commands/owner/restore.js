/**
 * Restore Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'restore',
  aliases: ['restoreall'],
  category: 'owner',
  description: 'Restore all data',
  usage: '.restore',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Restore Command*\n\nThis is the restore command in the owner category.\nStatus: *Functional*`);
  }
};
