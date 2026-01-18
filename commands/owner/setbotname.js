/**
 * Setbotname Command
 * Category: Owner
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'setbotname',
  aliases: ['botname'],
  category: 'owner',
  description: 'Set bot name',
  usage: '.setbotname [name]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); if (!args[0]) return reply("❌ Provide name!"); config.BOT_NAME = args.join(" "); await reply(`✅ *Bot name set to:* ${config.BOT_NAME}`);
    } catch (error) {
      console.error(`Error in setbotname command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
