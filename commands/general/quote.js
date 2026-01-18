/**
 * Quote Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'quote',
  aliases: ['randomquote'],
  category: 'general',
  description: 'Random quote',
  usage: '.quote',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    const res = await axios.get('https://api.quotable.io/random');
    await reply(`“${res.data.content}”\n\n— *${res.data.author}*`);
  }
};
