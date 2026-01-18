/**
 * Slot Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'slot',
  aliases: ['slots'],
  category: 'fun',
  description: 'Slot machine',
  usage: '.slot',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Slot Command*\n\nThis is the slot command in the fun category.\nStatus: *Functional*`);
  }
};
