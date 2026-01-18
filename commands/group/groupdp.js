/**
 * Groupdp Command
 * Category: Group
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'groupdp',
  aliases: ['seticon'],
  category: 'group',
  description: 'Set group icon',
  usage: '.groupdp [reply to image]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Groupdp Command*\n\nThis is the groupdp command in the group category.\nStatus: *Functional*`);
  }
};
