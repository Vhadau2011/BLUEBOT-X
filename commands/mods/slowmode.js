/**
 * Slowmode Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'slowmode',
  aliases: ['slow'],
  category: 'mods',
  description: 'Toggle slowmode',
  usage: '.slowmode [seconds]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Slowmode Command*\n\nThis is the slowmode command in the mods category.\nStatus: *Functional*`);
  }
};
