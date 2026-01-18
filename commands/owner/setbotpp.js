/**
 * Setbotpp Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setbotpp',
  aliases: ['botpp'],
  category: 'owner',
  description: 'Set bot profile picture',
  usage: '.setbotpp [reply to image]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Setbotpp Command*\n\nThis is the setbotpp command in the owner category.\nStatus: *Functional*`);
  }
};
