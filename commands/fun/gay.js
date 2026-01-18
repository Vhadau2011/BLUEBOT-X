/**
 * Gay Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'gay',
  aliases: ['gayrate'],
  category: 'fun',
  description: 'Gay rate',
  usage: '.gay [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    const rate = Math.floor(Math.random() * 101);
    const user = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0] || sender;
    await reply(`🏳️‍🌈 *Gay Rate for @${user.split('@')[0]}:* ${rate}%`, { mentions: [user] });
  }
};
