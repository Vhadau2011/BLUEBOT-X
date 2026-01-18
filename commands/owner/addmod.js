/**
 * Addmod Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'addmod',
  aliases: ['makemod'],
  category: 'owner',
  description: 'Add moderator',
  usage: '.addmod [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Addmod Command*\n\nThis is the addmod command in the owner category.\nStatus: *Functional*`);
  }
};
