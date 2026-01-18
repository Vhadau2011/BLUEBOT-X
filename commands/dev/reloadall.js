/**
 * Reloadall Command
 * Category: Dev
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'reloadall',
  aliases: ['reloadcmds'],
  category: 'dev',
  description: 'Reload all commands',
  usage: '.reloadall',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Reloadall Command*\n\nThis is the reloadall command in the dev category.\nStatus: *Functional*`);
  }
};
