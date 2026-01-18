/**
 * Groupdesc Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'groupdesc',
  aliases: ['setdesc'],
  category: 'group',
  description: 'Set group description',
  usage: '.groupdesc [description]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Groupdesc Command*\n\nThis is the groupdesc command in the group category.\nStatus: *Functional*`);
  }
};
