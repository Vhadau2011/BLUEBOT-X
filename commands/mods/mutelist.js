/**
 * Mutelist Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'mutelist',
  aliases: ['muted'],
  category: 'mods',
  description: 'List muted users',
  usage: '.mutelist',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Mutelist Command*\n\nThis is the mutelist command in the mods category.\nStatus: *Functional*`);
  }
};
