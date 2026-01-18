/**
 * Broadcast Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'broadcast',
  aliases: ['bc'],
  category: 'owner',
  description: 'Broadcast message',
  usage: '.broadcast [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    if (!isOwner) return reply('❌ Owner only!');
    if (!args[0]) return reply('❌ Provide a message!');
    await reply('📢 *Broadcasting...*');
  }
};
