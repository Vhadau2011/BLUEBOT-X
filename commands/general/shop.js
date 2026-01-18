/**
 * Shop Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'shop',
  aliases: ['store'],
  category: 'general',
  description: 'Bot shop',
  usage: '.shop',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`🛒 *BLUEBOT-X Shop*\n\n1. Premium Role - 5000 coins\n2. Custom Tag - 2000 coins\n3. XP Booster - 1000 coins`);
  }
};
