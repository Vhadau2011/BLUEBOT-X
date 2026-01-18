/**
 * Contact Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'contact',
  aliases: ['contactowner'],
  category: 'general',
  description: 'Contact bot owner',
  usage: '.contact',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`👨‍💻 *Developer:* mudau_t\n📱 *WhatsApp:* +27747815326\n📧 *Email:* mudau_t@developer.com`);
  }
};
