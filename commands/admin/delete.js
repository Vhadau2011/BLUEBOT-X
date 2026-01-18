/**
 * Delete Command
 * Category: Admin
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'delete',
  aliases: ['del'],
  category: 'admin',
  description: 'Delete message',
  usage: '.delete [reply to message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); if (!msg.message.extendedTextMessage?.contextInfo?.stanzaId) return reply("❌ Reply to a message!"); await sock.sendMessage(from, { delete: msg.message.extendedTextMessage.contextInfo });
    } catch (error) {
      console.error(`Error in delete command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
