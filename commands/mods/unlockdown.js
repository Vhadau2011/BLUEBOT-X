/**
 * Unlockdown Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'unlockdown',
  aliases: ['uld'],
  category: 'mods',
  description: 'Remove lockdown',
  usage: '.unlockdown',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Unlockdown Command*\n\n`;
    text += `This is the unlockdown command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
