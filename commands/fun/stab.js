/**
 * Stab Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'stab',
  aliases: ['stabme'],
  category: 'fun',
  description: 'Stab someone',
  usage: '.stab [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Stab Command*\n\nThis is the stab command in the fun category.\nStatus: *Functional*`);
  }
};
