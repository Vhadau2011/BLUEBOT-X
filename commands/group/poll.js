/**
 * Poll Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'poll',
  aliases: ['createpoll'],
  category: 'group',
  description: 'Create poll',
  usage: '.poll [question]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); if (!args[0]) return reply("❌ Provide question!"); await sock.sendMessage(from, { poll: { name: args.join(" "), values: ["Yes", "No"], selectableCount: 1 } });
    } catch (error) {
      console.error(`Error in poll command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
