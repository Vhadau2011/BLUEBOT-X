/**
 * Donate Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'donate',
  aliases: ['contribution'],
  category: 'general',
  description: 'Donation information',
  usage: '.donate',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Donate Command*\n\nThis is the donate command in the general category.\nStatus: *Functional*`);
  }
};
