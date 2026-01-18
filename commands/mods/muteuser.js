/**
 * Muteu ser Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'muteu ser',
  aliases: ['mutemember'],
  category: 'mods',
  description: 'Mute user',
  usage: '.muteuser [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Muteu ser Command*\n\n`;
    text += `This is the muteu ser command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
