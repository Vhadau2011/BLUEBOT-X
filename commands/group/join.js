/**
 * Join Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'join',
  aliases: ['joingroup'],
  category: 'group',
  description: 'Join group via link',
  usage: '.join [link]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Join Command*\n\n`;
    text += `This is the join command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
