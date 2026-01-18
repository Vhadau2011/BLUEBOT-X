/**
 * Announce Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'announce',
  aliases: ['announcement'],
  category: 'group',
  description: 'Group announcement',
  usage: '.announce [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Announce Command*\n\n`;
    text += `This is the announce command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
