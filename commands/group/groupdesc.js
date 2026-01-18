/**
 * Groupdesc Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'groupdesc',
  aliases: ['setdesc'],
  category: 'group',
  description: 'Set group description',
  usage: '.groupdesc [description]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); if (!args[0]) return reply("❌ Provide desc!"); await sock.groupUpdateDescription(from, args.join(" ")); await reply("✅ Desc updated!");
    } catch (error) {
      console.error(`Error in groupdesc command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
