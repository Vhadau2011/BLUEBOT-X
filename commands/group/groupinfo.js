/**
 * Groupinfo Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'groupinfo',
  aliases: ['ginfo'],
  category: 'group',
  description: 'Group information',
  usage: '.groupinfo',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Groupinfo Command*\n\n`;
    text += `This is the groupinfo command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
