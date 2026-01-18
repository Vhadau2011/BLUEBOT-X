/**
 * Setrules Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'setrules',
  aliases: ['rules'],
  category: 'mods',
  description: 'Set group rules',
  usage: '.setrules [rules]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Setrules Command*\n\n`;
    text += `This is the setrules command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
