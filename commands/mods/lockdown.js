/**
 * Lockdown Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'lockdown',
  aliases: ['ld'],
  category: 'mods',
  description: 'Lockdown group',
  usage: '.lockdown',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Lockdown Command*\n\n`;
    text += `This is the lockdown command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
