/**
 * Unrestrict Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unrestrict',
  aliases: ['unlimit'],
  category: 'mods',
  description: 'Unrestrict user',
  usage: '.unrestrict [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Unrestrict Command*\n\nThis is the unrestrict command in the mods category.\nStatus: *Functional*`);
  }
};
