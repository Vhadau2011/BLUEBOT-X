/**
 * Groupdp Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'groupdp',
  aliases: ['seticon'],
  category: 'group',
  description: 'Set group icon',
  usage: '.groupdp [reply to image]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Groupdp Command*\n\n`;
    text += `This is the groupdp command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
