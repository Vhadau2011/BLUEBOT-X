/**
 * Groupinfo Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'groupinfo',
  aliases: ['ginfo'],
  category: 'group',
  description: 'Group information',
  usage: '.groupinfo',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!isGroup) return reply('❌ Groups only!');
    const meta = await sock.groupMetadata(from);
    await reply(`👥 *Group Info*\n\n📝 Name: ${meta.subject}\n🆔 ID: ${meta.id}\n👥 Members: ${meta.participants.length}\n📅 Created: ${new Date(meta.creation * 1000).toDateString()}`);
  }
};
