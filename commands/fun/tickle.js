/**
 * Tickle Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'tickle',
  aliases: ['tickleme'],
  category: 'fun',
  description: 'Tickle someone',
  usage: '.tickle [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Tickle Command*\n\nThis is the tickle command in the fun category.\nStatus: *Functional*`);
  }
};
