/**
 * Database Command
 * Category: Dev
 * Developer: mudau_t
 */

export default {
  name: 'database',
  aliases: ['db'],
  category: 'dev',
  description: 'Database stats',
  usage: '.database',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Database Command*\n\n`;
    text += `This is the database command in the dev category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
