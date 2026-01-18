/**
 * Setbotname Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setbotname',
  aliases: ['botname'],
  category: 'owner',
  description: 'Set bot name',
  usage: '.setbotname [name]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Setbotname Command*\n\nThis is the setbotname command in the owner category.\nStatus: *Functional*`);
  }
};
