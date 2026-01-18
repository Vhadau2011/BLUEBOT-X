/**
 * Weather Command
 * Category: General
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'weather',
  aliases: ['weatherinfo'],
  category: 'general',
  description: 'Weather info',
  usage: '.weather [city]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
if (!args[0]) return reply("❌ Provide a city!"); try { const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=061f24e35386c501400a20c6d033c401`); const { main, weather, name } = res.data; await reply(`☁️ *Weather: ${name}*\n🌡️ Temp: ${main.temp}°C\n📝 Desc: ${weather[0].description}`); } catch { reply("❌ City not found!"); }
    } catch (error) {
      console.error(`Error in weather command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
