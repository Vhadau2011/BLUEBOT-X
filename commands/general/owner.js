/**
 * Owner Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
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
    try {
const vcard = "BEGIN:VCARD\nVERSION:3.0\nFN:" + config.OWNER_NAME + "\nTEL;type=CELL;type=VOICE;waid=" + config.OWNER_NUMBER + ":+" + config.OWNER_NUMBER + "\nEND:VCARD"; await sock.sendMessage(from, { contacts: { displayName: config.OWNER_NAME, contacts: [{ vcard }] } });
    } catch (error) {
      console.error(`Error in owner command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
