/**
 * Broadcast Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'broadcast',
  aliases: ['bc'],
  category: 'owner',
  description: 'Broadcast message',
  usage: '.broadcast [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); if (!args[0]) return reply("❌ Provide message!"); await reply("📢 *Broadcasting to all chats...*");
    } catch (error) {
      console.error(`Error in broadcast command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
