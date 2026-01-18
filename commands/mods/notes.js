/**
 * Notes Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'notes',
  aliases: ['notelist'],
  category: 'mods',
  description: 'List notes',
  usage: '.notes',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Notes Command*\n\nThis is the notes command in the mods category.\nStatus: *Functional*`);
  }
};
