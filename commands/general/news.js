/**
 * News Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'news',
  aliases: ['latestnews'],
  category: 'general',
  description: 'Latest news',
  usage: '.news [category]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`📰 *Latest News*\n\n1. Tech: New AI model released\n2. World: Global summit starts\n3. Sports: Championship finals tonight\n\n_Use .news [category] for more_`);
  }
};
