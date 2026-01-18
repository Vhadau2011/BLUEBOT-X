/**
 * Balance Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'balance',
  aliases: ['bal'],
  category: 'general',
  description: 'Check your balance',
  usage: '.balance',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`💰 *Your Balance:* 1,500 coins`);
  }
};
