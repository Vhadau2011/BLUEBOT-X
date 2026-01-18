/**
 * Disapprove Command
 * Category: Mods
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'disapprove',
  aliases: ['unwhitelist'],
  category: 'mods',
  description: 'Disapprove user',
  usage: '.disapprove [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Disapprove Command*\n\nThis is the disapprove command in the mods category.\nStatus: *Functional*`);
  }
};
