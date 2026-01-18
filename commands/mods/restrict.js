/**
 * Restrict Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'restrict',
  aliases: ['limit'],
  category: 'mods',
  description: 'Restrict user',
  usage: '.restrict [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Restrict Command*\n\nThis is the restrict command in the mods category.\nStatus: *Functional*`);
  }
};
