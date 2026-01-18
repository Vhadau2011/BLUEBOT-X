/**
 * Tagall Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'tagall',
  aliases: ['mentionall'],
  category: 'group',
  description: 'Tag all members',
  usage: '.tagall [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!isGroup) return reply('❌ Groups only!');
    if (!isGroupAdmin && !isOwner) return reply('❌ Admins only!');
    const meta = await sock.groupMetadata(from);
    const mentions = meta.participants.map(p => p.id);
    await sock.sendMessage(from, { text: `📢 *Attention!*\n\n${args.join(' ') || 'No message'}\n\n` + mentions.map(m => `@${m.split('@')[0]}`).join(' '), mentions });
  }
};
