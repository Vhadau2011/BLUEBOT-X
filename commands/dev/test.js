/**
 * Test Command
 * Category: Dev
 * Developer: mudau_t
 */

export default {
  name: 'test',
  aliases: ['testing'],
  category: 'dev',
  description: 'Test command',
  usage: '.test',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Test Command*\n\n`;
    text += `This is the test command in the dev category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
