/**
 * Ip Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'ip',
  aliases: ['ipinfo'],
  category: 'general',
  description: 'IP information',
  usage: '.ip [address]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Provide IP!"); try { const res = await axios.get(`http://ip-api.com/json/${args[0]}`); await reply(`🌐 *IP:* ${res.data.query}\n🌍 Country: ${res.data.country}\n🏢 ISP: ${res.data.isp}`); } catch { reply("❌ Error!"); }
    } catch (error) {
      console.error(`Error in ip command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
