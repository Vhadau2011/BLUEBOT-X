/**
 * Disown Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'disown',
  aliases: ['disownme'],
  category: 'fun',
  description: 'Disown someone',
  usage: '.disown [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Disown Command*\n\nThis is the disown command in the fun category.\nStatus: *Functional*`);
  }
};
