/**
 * Hack Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'hack',
  aliases: ['hacker'],
  category: 'fun',
  description: 'Fake hack',
  usage: '.hack [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Hack Command*\n\nThis is the hack command in the fun category.\nStatus: *Functional*`);
  }
};
