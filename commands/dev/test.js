/**
 * Test Command
 * Category: Dev
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'test',
  aliases: ['testing'],
  category: 'dev',
  description: 'Test command',
  usage: '.test',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Test Command*\n\nThis is the test command in the dev category.\nStatus: *Functional*`);
  }
};
