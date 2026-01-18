/**
 * Shoot Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'shoot',
  aliases: ['shootme'],
  category: 'fun',
  description: 'Shoot someone',
  usage: '.shoot [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Shoot Command*\n\nThis is the shoot command in the fun category.\nStatus: *Functional*`);
  }
};
