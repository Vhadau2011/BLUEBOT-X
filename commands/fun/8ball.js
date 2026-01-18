/**
 * 8ball Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: '8ball',
  aliases: ['eightball'],
  category: 'fun',
  description: 'Magic 8 ball',
  usage: '.8ball [question]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    const answers = ['Yes', 'No', 'Maybe', 'Definitely', 'Never', 'Ask again'];
    await reply(`🎱 *8-Ball:* ${answers[Math.floor(Math.random() * answers.length)]}`);
  }
};
