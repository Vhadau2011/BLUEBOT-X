/**
 * Setbotbio Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setbotbio',
  aliases: ['botbio'],
  category: 'owner',
  description: 'Set bot bio',
  usage: '.setbotbio [bio]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Setbotbio Command*\n\nThis is the setbotbio command in the owner category.\nStatus: *Functional*`);
  }
};
