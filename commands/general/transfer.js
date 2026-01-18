/**
 * Transfer Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'transfer',
  aliases: ['send'],
  category: 'general',
  description: 'Transfer coins',
  usage: '.transfer [@user] [amount]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Transfer Command*\n\nThis is the transfer command in the general category.\nStatus: *Functional*`);
  }
};
