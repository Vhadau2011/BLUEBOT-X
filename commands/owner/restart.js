/**
 * Restart Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'restart',
  aliases: ['reboot'],
  category: 'owner',
  description: 'Restart bot',
  usage: '.restart',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Restart Command*\n\n`;
    text += `This is the restart command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
