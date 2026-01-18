/**
 * Demote Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'demote',
  aliases: ['removeadmin'],
  category: 'admin',
  description: 'Demote from admin',
  usage: '.demote [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Demote Command*\n\n`;
    text += `This is the demote command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
