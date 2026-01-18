/**
 * Shell Command
 * Category: Dev
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'shell',
  aliases: ['bash'],
  category: 'dev',
  description: 'Execute shell command',
  usage: '.shell [command]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!isOwner) return reply('❌ Owner only!');
    const { exec } = await import('child_process');
    exec(args.join(' '), (err, stdout) => {
        if (err) return reply(String(err));
        reply(stdout || '✅ Done');
    });
  }
};
