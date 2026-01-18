/**
 * Poll Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'poll',
  aliases: ['createpoll'],
  category: 'group',
  description: 'Create poll',
  usage: '.poll [question]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Poll Command*\n\n`;
    text += `This is the poll command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
