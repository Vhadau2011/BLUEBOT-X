/**
 * Calculator Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'calculator',
  aliases: ['calc'],
  category: 'general',
  description: 'Calculate math',
  usage: '.calculator [expression]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!args[0]) return reply('❌ Provide an expression!');
    try {
        const result = eval(args.join('').replace(/[^-()\d/*+.]/g, ''));
        await reply(`🔢 *Result:* ${result}`);
    } catch { reply('❌ Invalid expression!'); }
  }
};
