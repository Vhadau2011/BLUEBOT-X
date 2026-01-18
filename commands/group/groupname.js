/**
 * Groupname Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'groupname',
  aliases: ['setname'],
  category: 'group',
  description: 'Set group name',
  usage: '.groupname [name]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Groupname Command*\n\nThis is the groupname command in the group category.\nStatus: *Functional*`);
  }
};
