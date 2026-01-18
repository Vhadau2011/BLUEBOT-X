/**
 * Resetlink Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'resetlink',
  aliases: ['revoke'],
  category: 'group',
  description: 'Reset group link',
  usage: '.resetlink',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!isGroup) return reply('❌ Groups only!');
    if (!isBotGroupAdmin) return reply('❌ I need admin!');
    await sock.groupRevokeInvite(from);
    await reply('✅ Group link reset!');
  }
};
