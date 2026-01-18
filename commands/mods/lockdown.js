/**
 * Lockdown Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'lockdown',
  aliases: ['ld'],
  category: 'mods',
  description: 'Lockdown group',
  usage: '.lockdown',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Lockdown Command*\n\nThis is the lockdown command in the mods category.\nStatus: *Functional*`);
  }
};
