/**
 * Report Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'report',
  aliases: ['reportbug'],
  category: 'general',
  description: 'Report a bug',
  usage: '.report [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Report Command*\n\nThis is the report command in the general category.\nStatus: *Functional*`);
  }
};
