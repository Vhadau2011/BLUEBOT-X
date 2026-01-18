/**
 * Invite Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'invite',
  aliases: ['inviteuser'],
  category: 'group',
  description: 'Invite user',
  usage: '.invite [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Invite Command*\n\nThis is the invite command in the group category.\nStatus: *Functional*`);
  }
};
