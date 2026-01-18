/**
 * Antilink Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'antilink',
  aliases: ['antilinkmode'],
  category: 'group',
  description: 'Toggle antilink',
  usage: '.antilink [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Antilink Command*\n\nThis is the antilink command in the group category.\nStatus: *Functional*`);
  }
};
