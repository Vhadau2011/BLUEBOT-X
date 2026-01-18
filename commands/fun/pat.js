/**
 * Pat Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'pat',
  aliases: ['headpat'],
  category: 'fun',
  description: 'Pat someone',
  usage: '.pat [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Pat Command*\n\nThis is the pat command in the fun category.\nStatus: *Functional*`);
  }
};
