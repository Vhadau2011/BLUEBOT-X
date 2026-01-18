/**
 * Rules Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'rules',
  aliases: ['grouprules'],
  category: 'mods',
  description: 'View group rules',
  usage: '.rules',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Rules Command*\n\nThis is the rules command in the mods category.\nStatus: *Functional*`);
  }
};
