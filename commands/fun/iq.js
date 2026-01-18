/**
 * Iq Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'iq',
  aliases: ['iqtest'],
  category: 'fun',
  description: 'IQ test',
  usage: '.iq [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    const iq = Math.floor(Math.random() * 150) + 50;
    const user = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0] || sender;
    await reply(`🧠 *IQ for @${user.split('@')[0]}:* ${iq}`, { mentions: [user] });
  }
};
