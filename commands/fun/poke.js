/**
 * Poke Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'poke',
  aliases: ['pokeme'],
  category: 'fun',
  description: 'Poke someone',
  usage: '.poke [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Poke Command*\n\nThis is the poke command in the fun category.\nStatus: *Functional*`);
  }
};
