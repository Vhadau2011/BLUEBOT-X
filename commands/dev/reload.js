/**
 * Reload Command
 * Category: Dev
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'reload',
  aliases: ['reloadcmd'],
  category: 'dev',
  description: 'Reload command',
  usage: '.reload [command]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Reload Command*\n\nThis is the reload command in the dev category.\nStatus: *Functional*`);
  }
};
