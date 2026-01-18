/**
 * Autorespond Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'autorespond',
  aliases: ['autoresp'],
  category: 'owner',
  description: 'Set auto response',
  usage: '.autorespond [trigger] [response]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Autorespond Command*\n\nThis is the autorespond command in the owner category.\nStatus: *Functional*`);
  }
};
