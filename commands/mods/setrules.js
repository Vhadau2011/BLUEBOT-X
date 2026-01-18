/**
 * Setrules Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setrules',
  aliases: ['rules'],
  category: 'mods',
  description: 'Set group rules',
  usage: '.setrules [rules]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Setrules Command*\n\nThis is the setrules command in the mods category.\nStatus: *Functional*`);
  }
};
