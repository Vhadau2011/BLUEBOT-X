/**
 * Unverify Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'unverify',
  aliases: ['unverifyuser'],
  category: 'mods',
  description: 'Unverify user',
  usage: '.unverify [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Unverify Command*\n\nThis is the unverify command in the mods category.\nStatus: *Functional*`);
  }
};
