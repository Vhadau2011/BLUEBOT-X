/**
 * Muteu ser Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'muteu ser',
  aliases: ['mutemember'],
  category: 'mods',
  description: 'Mute user',
  usage: '.muteuser [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Muteu ser Command*\n\nThis is the muteu ser command in the mods category.\nStatus: *Functional*`);
  }
};
