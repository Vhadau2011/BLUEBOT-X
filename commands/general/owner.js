/**
 * Owner Command
 * Category: General
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'owner',
  aliases: ['ownerinfo'],
  category: 'general',
  description: 'Display owner information',
  usage: '.owner',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + config.OWNER_NAME + '\n' + 'ORG:BLUEBOT-X Developer;\n' + 'TEL;type=CELL;type=VOICE;waid=' + config.OWNER_NUMBER + ':+ ' + config.OWNER_NUMBER + '\n' + 'END:VCARD';
    await sock.sendMessage(from, { contacts: { displayName: config.OWNER_NAME, contacts: [{ vcard }] } }, { quoted: msg });
  }
};
