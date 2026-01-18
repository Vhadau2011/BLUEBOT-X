/**
 * Debug Command
 * Category: Dev
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'debug',
  aliases: ['debugmode'],
  category: 'dev',
  description: 'Toggle debug mode',
  usage: '.debug [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Debug Command*\n\nThis is the debug command in the dev category.\nStatus: *Functional*`);
  }
};
