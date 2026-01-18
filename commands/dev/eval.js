/**
 * Eval Command
 * Category: Dev
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'eval',
  aliases: ['exec'],
  category: 'dev',
  description: 'Execute code',
  usage: '.eval [code]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!isOwner) return reply("❌ Owner only!"); try { let e = await eval(args.join(" ")); if (typeof e !== "string") e = await import("util").then(u => u.inspect(e)); await reply(e); } catch (e) { await reply(String(e)); }
    } catch (error) {
      console.error(`Error in eval command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
