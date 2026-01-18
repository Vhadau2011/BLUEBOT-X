/**
 * Translate Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'translate',
  aliases: ['trans'],
  category: 'general',
  description: 'Translate text',
  usage: '.translate [lang] [text]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (args.length < 2) return reply('❌ Usage: .translate [lang] [text]\nExample: .translate fr hello');
    const lang = args[0];
    const text = args.slice(1).join(' ');
    await reply(`🌐 *Translation (${lang}):*\n\nhttps://translate.google.com/?sl=auto&tl=${lang}&text=${encodeURIComponent(text)}&op=translate`);
  }
};
