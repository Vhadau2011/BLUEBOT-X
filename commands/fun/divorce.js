/**
 * Divorce Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'divorce',
  aliases: ['breakup'],
  category: 'fun',
  description: 'Divorce someone',
  usage: '.divorce [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Divorce Command*\n\nThis is the divorce command in the fun category.\nStatus: *Functional*`);
  }
};
