/**
 * Ip Command
 * Category: General
 * Developer: mudau_t
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

    if (!args[0]) return reply('❌ Provide an IP address!');
    try {
        const res = await axios.get(`http://ip-api.com/json/${args[0]}`);
        const { country, regionName, city, isp, query } = res.data;
        await reply(`🌐 *IP Info: ${query}*\n\n🌍 Country: ${country}\n🏙️ City: ${city}\n🏢 ISP: ${isp}`);
    } catch { reply('❌ Failed to fetch IP info!'); }
  }
};
