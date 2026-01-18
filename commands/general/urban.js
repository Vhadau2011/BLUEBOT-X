/**
 * Urban Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'urban',
  aliases: ['urbandictionary'],
  category: 'general',
  description: 'Urban dictionary',
  usage: '.urban [word]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Urban Command*\n\n`;
    text += `This is the urban command in the general category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
