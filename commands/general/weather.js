/**
 * Weather Command
 * Category: General
 * Developer: mudau_t
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

    if (!args[0]) return reply('❌ Please provide a city name!');
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=061f24e35386c501400a20c6d033c401`);
        const { name, main, weather, wind } = res.data;
        let text = `☁️ *Weather in ${name}*\n\n`;
        text += `🌡️ *Temp:* ${main.temp}°C\n`;
        text += `✨ *Feels like:* ${main.feels_like}°C\n`;
        text += `💧 *Humidity:* ${main.humidity}%\n`;
        text += `💨 *Wind:* ${wind.speed} m/s\n`;
        text += `📝 *Desc:* ${weather[0].description}`;
        await reply(text);
    } catch { reply('❌ City not found!'); }
  }
};
