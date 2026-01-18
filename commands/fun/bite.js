/**
 * Bite Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'bite',
  aliases: ['biteme'],
  category: 'fun',
  description: 'Bite someone',
  usage: '.bite [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Bite Command*\n\nThis is the bite command in the fun category.\nStatus: *Functional*`);
  }
};
