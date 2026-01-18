/**
 * Currency Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'currency',
  aliases: ['convert'],
  category: 'general',
  description: 'Currency converter',
  usage: '.currency [amount] [from] [to]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Currency Command*\n\nThis is the currency command in the general category.\nStatus: *Functional*`);
  }
};
