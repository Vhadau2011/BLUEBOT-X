/**
 * Welcome Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'welcome',
  aliases: ['setwelcome'],
  category: 'group',
  description: 'Toggle welcome',
  usage: '.welcome [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Welcome Command*\n\n`;
    text += `This is the welcome command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
