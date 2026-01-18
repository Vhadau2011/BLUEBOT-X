/**
 * Inactive Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'inactive',
  aliases: ['leastactive'],
  category: 'group',
  description: 'Inactive members',
  usage: '.inactive',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Inactive Command*\n\n`;
    text += `This is the inactive command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
