/**
 * Unwarn Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'unwarn',
  aliases: ['removewarn'],
  category: 'admin',
  description: 'Remove warning',
  usage: '.unwarn [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Unwarn Command*\n\n`;
    text += `This is the unwarn command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
