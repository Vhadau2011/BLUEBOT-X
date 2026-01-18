/**
 * Sigma Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'sigma',
  aliases: ['sigmarate'],
  category: 'fun',
  description: 'Sigma rate',
  usage: '.sigma [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Sigma Command*\n\nThis is the sigma command in the fun category.\nStatus: *Functional*`);
  }
};
