/**
 * Grouplink Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'grouplink',
  aliases: ['gclink'],
  category: 'group',
  description: 'Get group link',
  usage: '.grouplink',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!isGroup) return reply('❌ Groups only!');
    if (!isBotGroupAdmin) return reply('❌ I need admin!');
    const code = await sock.groupInviteCode(from);
    await reply(`🔗 *Group Link:* https://chat.whatsapp.com/${code}`);
  }
};
