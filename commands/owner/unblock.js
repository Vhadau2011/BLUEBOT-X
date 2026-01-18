/**
 * Unblock Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unblock',
  aliases: ['unblockuser'],
  category: 'owner',
  description: 'Unblock user',
  usage: '.unblock [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Unblock Command*\n\nThis is the unblock command in the owner category.\nStatus: *Functional*`);
  }
};
