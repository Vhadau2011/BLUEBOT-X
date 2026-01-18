/**
 * Inject Command
 * Category: Dev
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'inject',
  aliases: ['injectcode'],
  category: 'dev',
  description: 'Inject code',
  usage: '.inject [code]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Inject Command*\n\nThis is the inject command in the dev category.\nStatus: *Functional*`);
  }
};
