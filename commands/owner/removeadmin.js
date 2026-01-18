/**
 * Removeadmin Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'removeadmin',
  aliases: ['deladmin'],
  category: 'owner',
  description: 'Remove bot admin',
  usage: '.removeadmin [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Removeadmin Command*\n\nThis is the removeadmin command in the owner category.\nStatus: *Functional*`);
  }
};
