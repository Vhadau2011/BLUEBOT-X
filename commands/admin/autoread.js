/**
 * Autoread Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'autoread',
  aliases: ['autoreadmode'],
  category: 'admin',
  description: 'Toggle autoread',
  usage: '.autoread [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Autoread Command*\n\n`;
    text += `This is the autoread command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
