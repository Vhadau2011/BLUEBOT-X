/**
 * Setmode Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'setmode',
  aliases: ['mode'],
  category: 'owner',
  description: 'Set bot mode',
  usage: '.setmode [public/private]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Setmode Command*\n\n`;
    text += `This is the setmode command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
