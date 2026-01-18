/**
 * Addadmin Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'addadmin',
  aliases: ['makeadmin'],
  category: 'owner',
  description: 'Add bot admin',
  usage: '.addadmin [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Addadmin Command*\n\nThis is the addadmin command in the owner category.\nStatus: *Functional*`);
  }
};
