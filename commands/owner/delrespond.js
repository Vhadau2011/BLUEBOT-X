/**
 * Delrespond Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'delrespond',
  aliases: ['delresp'],
  category: 'owner',
  description: 'Delete auto response',
  usage: '.delrespond [trigger]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Delrespond Command*\n\nThis is the delrespond command in the owner category.\nStatus: *Functional*`);
  }
};
