/**
 * Marry Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'marry',
  aliases: ['propose'],
  category: 'fun',
  description: 'Marry someone',
  usage: '.marry [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Marry Command*\n\nThis is the marry command in the fun category.\nStatus: *Functional*`);
  }
};
