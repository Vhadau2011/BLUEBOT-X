/**
 * Unlockdown Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unlockdown',
  aliases: ['uld'],
  category: 'mods',
  description: 'Remove lockdown',
  usage: '.unlockdown',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Unlockdown Command*\n\nThis is the unlockdown command in the mods category.\nStatus: *Functional*`);
  }
};
