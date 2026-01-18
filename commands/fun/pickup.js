/**
 * Pickup Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'pickup',
  aliases: ['pickupline'],
  category: 'fun',
  description: 'Pickup line',
  usage: '.pickup',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Pickup Command*\n\nThis is the pickup command in the fun category.\nStatus: *Functional*`);
  }
};
