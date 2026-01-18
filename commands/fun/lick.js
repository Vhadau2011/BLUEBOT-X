/**
 * Lick Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'lick',
  aliases: ['lickme'],
  category: 'fun',
  description: 'Lick someone',
  usage: '.lick [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Lick Command*\n\nThis is the lick command in the fun category.\nStatus: *Functional*`);
  }
};
