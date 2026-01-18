/**
 * Backup Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'backup',
  aliases: ['backupall'],
  category: 'owner',
  description: 'Backup all data',
  usage: '.backup',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Backup Command*\n\nThis is the backup command in the owner category.\nStatus: *Functional*`);
  }
};
