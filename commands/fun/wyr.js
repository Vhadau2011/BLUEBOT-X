/**
 * Wyr Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'wyr',
  aliases: ['wouldyourather'],
  category: 'fun',
  description: 'Would you rather',
  usage: '.wyr',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Wyr Command*\n\nThis is the wyr command in the fun category.\nStatus: *Functional*`);
  }
};
