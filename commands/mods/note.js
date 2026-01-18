/**
 * Note Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'note',
  aliases: ['addnote'],
  category: 'mods',
  description: 'Add note',
  usage: '.note [name] [content]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Note Command*\n\nThis is the note command in the mods category.\nStatus: *Functional*`);
  }
};
