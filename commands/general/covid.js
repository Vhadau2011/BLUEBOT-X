/**
 * Covid Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'covid',
  aliases: ['coronavirus'],
  category: 'general',
  description: 'COVID-19 stats',
  usage: '.covid [country]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Provide country!"); try { const res = await axios.get(`https://disease.sh/v3/covid-19/countries/${args[0]}`); await reply(`🦠 *COVID: ${res.data.country}*\n😷 Cases: ${res.data.cases}\n💀 Deaths: ${res.data.deaths}`); } catch { reply("❌ Error!"); }
    } catch (error) {
      console.error(`Error in covid command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
