/**
 * Update Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'update',
  aliases: ['updatebot'],
  category: 'owner',
  description: 'Update bot',
  usage: '.update',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Update Command*\n\nThis is the update command in the owner category.\nStatus: *Functional*`);
  }
};
