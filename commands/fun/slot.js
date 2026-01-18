/**
 * Slot Command
 * Category: Fun
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'slot',
  aliases: ['slots'],
  category: 'fun',
  description: 'Slot machine',
  usage: '.slot',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    try {
const s = ["🍎", "🍐", "🍒", "💎"]; const r = [s[Math.floor(Math.random()*4)], s[Math.floor(Math.random()*4)], s[Math.floor(Math.random()*4)]]; await reply(`🎰 *Slots:* [ ${r.join(" | ")} ]\n${r[0]===r[1]&&r[1]===r[2]?"🎉 *WINNER!*":"❌ *Try again!*"}`);
    } catch (error) {
      console.error(`Error in slot command:`, error);
      await reply(`❌ Error: ${error.message}`);
    }
  }
};
