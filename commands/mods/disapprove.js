/**
 * Disapprove Command
 * Category: Mods
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'disapprove',
  aliases: ['unwhitelist'],
  category: 'mods',
  description: 'Disapprove user',
  usage: '.disapprove [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isMod && !isOwner) return reply("❌ Mods only!"); const u = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0]; if (!u) return reply("❌ Mention someone!"); await reply(`❌ *Disapproved:* @${u.split("@")[0]}`, { mentions: [u] });
    } catch (error) {
      console.error(`Error in disapprove command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
