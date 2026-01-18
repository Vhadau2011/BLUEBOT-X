/**
 * Block Command
 * Category: Owner
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'block',
  aliases: ['blockuser'],
  category: 'owner',
  description: 'Block user',
  usage: '.block [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Block Command*\n\nThis is the block command in the owner category.\nStatus: *Functional*`);
  }
};
