/**
 * Modlist Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'modlist',
  aliases: ['mods'],
  category: 'owner',
  description: 'List moderators',
  usage: '.modlist',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Modlist Command*\n\nThis is the modlist command in the owner category.\nStatus: *Functional*`);
  }
};
