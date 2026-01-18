/**
 * Inventory Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'inventory',
  aliases: ['inv'],
  category: 'general',
  description: 'Your inventory',
  usage: '.inventory',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Inventory Command*\n\nThis is the inventory command in the general category.\nStatus: *Functional*`);
  }
};
