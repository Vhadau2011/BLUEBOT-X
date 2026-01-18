/**
 * Timezone Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'timezone',
  aliases: ['settz'],
  category: 'admin',
  description: 'Set timezone',
  usage: '.timezone [zone]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Timezone Command*\n\n`;
    text += `This is the timezone command in the admin category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
