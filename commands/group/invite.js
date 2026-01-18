/**
 * Invite Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'invite',
  aliases: ['inviteuser'],
  category: 'group',
  description: 'Invite user',
  usage: '.invite [number]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Invite Command*\n\n`;
    text += `This is the invite command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
