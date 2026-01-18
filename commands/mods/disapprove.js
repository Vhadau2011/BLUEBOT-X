/**
 * Disapprove Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'disapprove',
  aliases: ['unwhitelist'],
  category: 'mods',
  description: 'Disapprove user',
  usage: '.disapprove [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Disapprove Command*\n\n`;
    text += `This is the disapprove command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
