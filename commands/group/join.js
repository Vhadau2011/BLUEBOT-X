/**
 * Join Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'join',
  aliases: ['joingroup'],
  category: 'group',
  description: 'Join group via link',
  usage: '.join [link]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Provide link!"); await reply("✅ *Joining...*");
    } catch (error) {
      console.error(`Error in join command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
