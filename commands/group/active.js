/**
 * Active Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'active',
  aliases: ['mostactive'],
  category: 'group',
  description: 'Most active members',
  usage: '.active',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Active Command*\n\n`;
    text += `This is the active command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
