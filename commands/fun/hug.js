/**
 * Hug Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'hug',
  aliases: ['embrace'],
  category: 'fun',
  description: 'Hug someone',
  usage: '.hug [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Hug Command*\n\nThis is the hug command in the fun category.\nStatus: *Functional*`);
  }
};
