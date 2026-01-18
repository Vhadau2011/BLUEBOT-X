/**
 * Slap Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'slap',
  aliases: ['hit'],
  category: 'fun',
  description: 'Slap someone',
  usage: '.slap [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Slap Command*\n\nThis is the slap command in the fun category.\nStatus: *Functional*`);
  }
};
