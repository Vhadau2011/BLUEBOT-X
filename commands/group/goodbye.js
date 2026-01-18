/**
 * Goodbye Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'goodbye',
  aliases: ['setgoodbye'],
  category: 'group',
  description: 'Toggle goodbye',
  usage: '.goodbye [on/off]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Goodbye Command*\n\n`;
    text += `This is the goodbye command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
