/**
 * Groupname Command
 * Category: Group
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'groupname',
  aliases: ['setname'],
  category: 'group',
  description: 'Set group name',
  usage: '.groupname [name]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isGroup) return reply("❌ Groups only!"); if (!isGroupAdmin && !isOwner) return reply("❌ Admins only!"); if (!args[0]) return reply("❌ Provide name!"); await sock.groupUpdateSubject(from, args.join(" ")); await reply("✅ Name updated!");
    } catch (error) {
      console.error(`Error in groupname command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
