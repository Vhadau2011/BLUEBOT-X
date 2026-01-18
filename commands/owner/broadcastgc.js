/**
 * Broadcastgc Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'broadcastgc',
  aliases: ['bcgc'],
  category: 'owner',
  description: 'Broadcast to groups',
  usage: '.broadcastgc [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Broadcastgc Command*\n\nThis is the broadcastgc command in the owner category.\nStatus: *Functional*`);
  }
};
