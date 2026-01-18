/**
 * Time Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'time',
  aliases: ['currenttime'],
  category: 'general',
  description: 'Current time',
  usage: '.time [timezone]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    const now = new Date();
    await reply(`🕒 *Current Time:*\n\n📅 Date: ${now.toDateString()}\n⏰ Time: ${now.toLocaleTimeString()}`);
  }
};
