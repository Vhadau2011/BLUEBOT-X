/**
 * About Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'about',
  aliases: ['botinfo'],
  category: 'general',
  description: 'About the bot',
  usage: '.about',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`🤖 *BLUEBOT-X*\n\nAn advanced WhatsApp bot developed by *mudau_t*.\nVersion: 2.0.0\nFeatures: 209+ Commands\nLicense: Custom (No Modification)`);
  }
};
