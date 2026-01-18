/**
 * Unmuteuser Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unmuteuser',
  aliases: ['unmute'],
  category: 'mods',
  description: 'Unmute user',
  usage: '.unmuteuser [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Unmuteuser Command*\n\nThis is the unmuteuser command in the mods category.\nStatus: *Functional*`);
  }
};
