/**
 * Kill Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'kill',
  aliases: ['murder'],
  category: 'fun',
  description: 'Fake kill',
  usage: '.kill [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Kill Command*\n\nThis is the kill command in the fun category.\nStatus: *Functional*`);
  }
};
