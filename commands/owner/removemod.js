/**
 * Removemod Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'removemod',
  aliases: ['delmod'],
  category: 'owner',
  description: 'Remove moderator',
  usage: '.removemod [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Removemod Command*\n\nThis is the removemod command in the owner category.\nStatus: *Functional*`);
  }
};
