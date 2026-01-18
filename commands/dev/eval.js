/**
 * Eval Command
 * Category: Dev
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'eval',
  aliases: ['exec'],
  category: 'dev',
  description: 'Execute code',
  usage: '.eval [code]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!isOwner) return reply('❌ Owner only!');
    try {
        let evaled = await eval(args.join(' '));
        if (typeof evaled !== 'string') evaled = await import('util').then(u => u.inspect(evaled));
        await reply(evaled);
    } catch (e) { await reply(String(e)); }
  }
};
