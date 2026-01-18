/**
 * Verify Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'verify',
  aliases: ['verifyuser'],
  category: 'mods',
  description: 'Verify user',
  usage: '.verify [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Verify Command*\n\nThis is the verify command in the mods category.\nStatus: *Functional*`);
  }
};
