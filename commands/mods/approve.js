/**
 * Approve Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'approve',
  aliases: ['whitelist'],
  category: 'mods',
  description: 'Approve user',
  usage: '.approve [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Approve Command*\n\nThis is the approve command in the mods category.\nStatus: *Functional*`);
  }
};
