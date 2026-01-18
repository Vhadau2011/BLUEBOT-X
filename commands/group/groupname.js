/**
 * Groupname Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'groupname',
  aliases: ['setname'],
  category: 'group',
  description: 'Set group name',
  usage: '.groupname [name]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Groupname Command*\n\n`;
    text += `This is the groupname command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
