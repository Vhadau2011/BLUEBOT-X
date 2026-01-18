/**
 * Pickup Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'pickup',
  aliases: ['pickupline'],
  category: 'fun',
  description: 'Pickup line',
  usage: '.pickup',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const p = ["Are you a magician? Because whenever I look at you, everyone else disappears.", "Do you have a map? I just got lost in your eyes."]; await reply(`💘 *Pickup Line:* ${p[Math.floor(Math.random()*p.length)]}`);
    } catch (error) {
      console.error(`Error in pickup command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
