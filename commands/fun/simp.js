/**
 * Simp Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'simp',
  aliases: ['simprate'],
  category: 'fun',
  description: 'Simp rate',
  usage: '.simp [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Simp Command*\n\nThis is the simp command in the fun category.\nStatus: *Functional*`);
  }
};
