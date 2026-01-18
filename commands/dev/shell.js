/**
 * Shell Command
 * Category: Dev
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'shell',
  aliases: ['bash'],
  category: 'dev',
  description: 'Execute shell command',
  usage: '.shell [command]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); const { exec } = await import("child_process"); exec(args.join(" "), (e, s) => reply(s || String(e)));
    } catch (error) {
      console.error(`Error in shell command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
