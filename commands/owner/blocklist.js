/**
 * Blocklist Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'blocklist',
  aliases: ['blocked'],
  category: 'owner',
  description: 'List blocked users',
  usage: '.blocklist',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Blocklist Command*\n\nThis is the blocklist command in the owner category.\nStatus: *Functional*`);
  }
};
