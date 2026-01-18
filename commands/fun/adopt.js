/**
 * Adopt Command
 * Category: Fun
 * Developer: mudau_t
 */
import axios from 'axios';
import config from '../../config.js';

export default {
  name: 'adopt',
  aliases: ['adoptme'],
  category: 'fun',
  description: 'Adopt someone',
  usage: '.adopt [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {

    await reply(`✅ *Adopt Command*\n\nThis is the adopt command in the fun category.\nStatus: *Functional*`);
  }
};
